import { useEffect, useState, useContext, useCallback } from 'react';
import { FaMobileAlt, FaEnvelopeOpenText, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import axios from 'axios';
import { ShopContext } from '/src/context/ShopContext';
import { toast } from 'react-toastify';

const Profile = () => {
    const { clientId } = useContext(ShopContext);
    const [clientData, setClientData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchClientData = useCallback(async () => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_NODEJS_API_BASEURL}/api/clients/${clientId}`
            );
            setClientData(response.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des données du client :", error);
        } finally {
            setLoading(false);
        }
    }, [clientId])

    useEffect(() => {
        if (!clientId) {
            toast.error("Vous devez être connecté pour accéder à cette page.", {
                autoClose: 5000,
            });
            setTimeout(() => {
                window.location.href = '/login';
            }, 4000);
        } else {
            fetchClientData();
        }
    }, [clientId, fetchClientData]);



    if (loading) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="pt-[100px] pb-8">
            {clientData ? (
                <>
                    <h1 className="mt-6 mb-1 text-5xl font-semibold">
                        Bienvenue {clientData.firstname} {clientData.lastname}
                    </h1>

                    {/* Personal Information */}
                    <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6]">
                        <div className="flex border-b border-[#E3E3E3] pb-2.5">
                            <span className="flex-shrink-0 socialbtn text-[#E93B81]">
                                <FaMobileAlt />
                            </span>
                            <div className="text-left ml-2.5">
                                <p className="text-xs text-[#44566C]">Téléphone</p>
                                <p className="break-all">
                                    <a className="hover:text-[#FA5252] duration-300 transition" href={`tel:${clientData.phone}`}>
                                        {clientData.phone}
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="flex border-b border-[#E3E3E3] py-2.5">
                            <span className="flex-shrink-0 socialbtn text-[#6AB5B9]">
                                <FaEnvelopeOpenText />
                            </span>
                            <div className="text-left ml-2.5">
                                <p className="text-xs text-[#44566C]">Email</p>
                                <p className="break-all">
                                    <a className="hover:text-[#FA5252] duration-300 transition" href={`mailto:${clientData.email}`}>
                                        {clientData.email}
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="flex border-b border-[#E3E3E3] py-2.5">
                            <span className="flex-shrink-0 socialbtn text-[#FD7590]">
                                <FaMapMarkerAlt />
                            </span>
                            <div className="text-left ml-2.5">
                                <p className="text-xs text-[#44566C]">Ville</p>
                                <p className="break-all">{clientData.city}, {clientData.postal_code}</p>
                            </div>
                        </div>

                        <div className="flex border-b border-[#E3E3E3] py-2.5">
                            <span className="flex-shrink-0 socialbtn text-[#C17CEB] ">
                                <FaMapMarkerAlt />
                            </span>
                            <div className="text-left ml-2.5">
                                <p className="text-xs text-[#44566C]">Adresse</p>
                                <p className="break-all">{clientData.address}</p>
                            </div>
                        </div>

                        <div className="flex border-b border-[#E3E3E3] py-2.5">
                            <span className="flex-shrink-0 socialbtn text-[#FD7590]">
                                <FaCalendarAlt />
                            </span>
                            <div className="text-left ml-2.5">
                                <p className="text-xs text-[#44566C]">SIREN</p>
                                <p className="break-all">{clientData.siren}</p>
                            </div>
                        </div>
                    </div>


                </>
            ) : (
                <h1>Aucun ID de client trouvé</h1>
            )}
        </div>
    );
};

export default Profile;