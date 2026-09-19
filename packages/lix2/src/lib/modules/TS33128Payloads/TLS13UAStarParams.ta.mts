/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TLS13OfferedPSK, _decode_TLS13OfferedPSK, _encode_TLS13OfferedPSK } from "../TS33128Payloads/TLS13OfferedPSK.ta.mjs";
// export { TLS13OfferedPSK, _decode_TLS13OfferedPSK, _encode_TLS13OfferedPSK } from "../TS33128Payloads/TLS13OfferedPSK.ta.mjs";
import { TLS13PSKKeyExchangeMode, _enum_for_TLS13PSKKeyExchangeMode, TLS13PSKKeyExchangeMode_pSKKE /* IMPORTED_LONG_ENUMERATION_ITEM */, pSKKE /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13PSKKeyExchangeMode_pSKDHEKE /* IMPORTED_LONG_ENUMERATION_ITEM */, pSKDHEKE /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TLS13PSKKeyExchangeMode, _encode_TLS13PSKKeyExchangeMode } from "../TS33128Payloads/TLS13PSKKeyExchangeMode.ta.mjs";
// export { TLS13PSKKeyExchangeMode, _enum_for_TLS13PSKKeyExchangeMode, TLS13PSKKeyExchangeMode_pSKKE /* IMPORTED_LONG_ENUMERATION_ITEM */, pSKKE /* IMPORTED_SHORT_ENUMERATION_ITEM */, TLS13PSKKeyExchangeMode_pSKDHEKE /* IMPORTED_LONG_ENUMERATION_ITEM */, pSKDHEKE /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TLS13PSKKeyExchangeMode, _encode_TLS13PSKKeyExchangeMode } from "../TS33128Payloads/TLS13PSKKeyExchangeMode.ta.mjs";
import { TLS13PSKInfo, _decode_TLS13PSKInfo, _encode_TLS13PSKInfo } from "../TS33128Payloads/TLS13PSKInfo.ta.mjs";
// export { TLS13PSKInfo, _decode_TLS13PSKInfo, _encode_TLS13PSKInfo } from "../TS33128Payloads/TLS13PSKInfo.ta.mjs";
import { TLS13KDFAlgorithm, _enum_for_TLS13KDFAlgorithm, TLS13KDFAlgorithm_rfc5869 /* IMPORTED_LONG_ENUMERATION_ITEM */, rfc5869 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TLS13KDFAlgorithm, _encode_TLS13KDFAlgorithm } from "../TS33128Payloads/TLS13KDFAlgorithm.ta.mjs";
// export { TLS13KDFAlgorithm, _enum_for_TLS13KDFAlgorithm, TLS13KDFAlgorithm_rfc5869 /* IMPORTED_LONG_ENUMERATION_ITEM */, rfc5869 /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TLS13KDFAlgorithm, _encode_TLS13KDFAlgorithm } from "../TS33128Payloads/TLS13KDFAlgorithm.ta.mjs";
import { TLS13CipherSuite, _decode_TLS13CipherSuite, _encode_TLS13CipherSuite } from "../TS33128Payloads/TLS13CipherSuite.ta.mjs";
// export { TLS13CipherSuite, _decode_TLS13CipherSuite, _encode_TLS13CipherSuite } from "../TS33128Payloads/TLS13CipherSuite.ta.mjs";
import { TLS13Extension, _decode_TLS13Extension, _encode_TLS13Extension } from "../TS33128Payloads/TLS13Extension.ta.mjs";
// export { TLS13Extension, _decode_TLS13Extension, _encode_TLS13Extension } from "../TS33128Payloads/TLS13Extension.ta.mjs";
import { TLS13Certificate, _decode_TLS13Certificate, _encode_TLS13Certificate } from "../TS33128Payloads/TLS13Certificate.ta.mjs";
// export { TLS13Certificate, _decode_TLS13Certificate, _encode_TLS13Certificate } from "../TS33128Payloads/TLS13Certificate.ta.mjs";
import { TLS13EarlySecretInfo, _decode_TLS13EarlySecretInfo, _encode_TLS13EarlySecretInfo } from "../TS33128Payloads/TLS13EarlySecretInfo.ta.mjs";
// export { TLS13EarlySecretInfo, _decode_TLS13EarlySecretInfo, _encode_TLS13EarlySecretInfo } from "../TS33128Payloads/TLS13EarlySecretInfo.ta.mjs";
import { TLS13EstablishedSecrets, _decode_TLS13EstablishedSecrets, _encode_TLS13EstablishedSecrets } from "../TS33128Payloads/TLS13EstablishedSecrets.ta.mjs";
// export { TLS13EstablishedSecrets, _decode_TLS13EstablishedSecrets, _encode_TLS13EstablishedSecrets } from "../TS33128Payloads/TLS13EstablishedSecrets.ta.mjs";
import { TLS13HandshakeSecretInfo, _decode_TLS13HandshakeSecretInfo, _encode_TLS13HandshakeSecretInfo } from "../TS33128Payloads/TLS13HandshakeSecretInfo.ta.mjs";
// export { TLS13HandshakeSecretInfo, _decode_TLS13HandshakeSecretInfo, _encode_TLS13HandshakeSecretInfo } from "../TS33128Payloads/TLS13HandshakeSecretInfo.ta.mjs";
import { TLS13MasterSecretInfo, _decode_TLS13MasterSecretInfo, _encode_TLS13MasterSecretInfo } from "../TS33128Payloads/TLS13MasterSecretInfo.ta.mjs";
// export { TLS13MasterSecretInfo, _decode_TLS13MasterSecretInfo, _encode_TLS13MasterSecretInfo } from "../TS33128Payloads/TLS13MasterSecretInfo.ta.mjs";
import { TLS13NewSessionTicket, _decode_TLS13NewSessionTicket, _encode_TLS13NewSessionTicket } from "../TS33128Payloads/TLS13NewSessionTicket.ta.mjs";
// export { TLS13NewSessionTicket, _decode_TLS13NewSessionTicket, _encode_TLS13NewSessionTicket } from "../TS33128Payloads/TLS13NewSessionTicket.ta.mjs";


/**
 * @summary TLS13UAStarParams
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13UAStarParams ::= SEQUENCE
 * {
 *     -- Basic cryptographic information.
 *     --
 *     -- The offeredPSKs, offeredPSKModes and selectedPSK
 *     -- parameters are also provided as part of client and
 *     -- server extensions below.
 *     --
 *     -- PSKs and key exchange modes offered by the client, see
 *     -- clause 4.2.9, 4.2.11. When AKMA (or other CSP-provided)
 *     -- keys are used, at least one offered PSK and key exchange mode
 *     -- will always be present in the client extensions
 *     offeredPSKs                      [1] SEQUENCE OF TLS13OfferedPSK,
 *     offeredPSKKeyExchangeModes       [2] SEQUENCE OF TLS13PSKKeyExchangeMode,
 *     -- The server-selected PSK, clause 4.2.11
 *     -- selectedPSKIdentity = j means the server selects j:th offered PSK.
 *     selectedPSKIdentity              [3] INTEGER (0..65535),
 *     -- The actual TLS PSK. When AKMA is used, this key will typically also
 *     -- be provided as an associated AFKeyInfo IRI, see below.
 *     selectedPSK                      [4] TLS13PSKInfo,
 *     -- Cryptographic state: transforms and sequence numbers.
 *     kDFAlgorithm                     [5] TLS13KDFAlgorithm, -- clause 7.1.
 *     clientSupportedCipherSuites      [6] SEQUENCE OF TLS13CipherSuite OPTIONAL,
 *     selectedCipherSuite              [7] TLS13CipherSuite, -- clause 4.2 and B.4.
 *     clientSequenceNumber             [8] INTEGER, -- clause 5.3
 *     serverSequenceNumber             [9] INTEGER, -- clause 5.3
 *     -- Handshake parameters, clause 4.1.2 and 4.1.3.
 *     clientRandom                    [10] OCTET STRING (SIZE(32)),
 *     serverRandom                    [11] OCTET STRING (SIZE(32)),
 *     legacySessionID                 [12] OCTET STRING (SIZE(0..32)),
 *     -- Complete contents of handshake extensions, clause 4.2.
 *     tLSClientHelloExtensions        [13] SEQUENCE OF TLS13Extension,
 *     tLSServerHelloExtensions        [14] SEQUENCE OF TLS13Extension,
 *     -- Encrypted server extensions, clause 4.3.1 (here provided in plaintext).
 *     tLSPlaintextEncryptedExtensions [15] SEQUENCE OF TLS13Extension OPTIONAL,
 *     -- Authentication related parameters, clause 4.4
 *     -- Certificates are encrypted between client and server,
 *     -- these are the unencrypted certificate(s).
 *     tLSPlaintextClientCertificate   [16] TLS13Certificate OPTIONAL,
 *     tLSPlaintextServerCertificate   [17] TLS13Certificate OPTIONAL,
 *     -- Session key information fields, clause 7.1
 *     earlySecret                     [18] TLS13EarlySecretInfo OPTIONAL,
 *     binderKey                       [19] OCTET STRING (SIZE(1..65535)) OPTIONAL,
 *     -- The key used by the cipher suite to encrypt early data is
 *     -- derived from clientEarlyTrafficSecret as described in clause 7.3.
 *     clientEarlyTrafficSecret        [20] OCTET STRING (SIZE(1..65535)),
 *     earlyExporterMasterSecret       [21] OCTET STRING (SIZE(1..65535)),
 *     -- Established shared key (from Diffie-Hellman or similar).
 *     sharedKey                       [22] TLS13EstablishedSecrets OPTIONAL,
 *     handshakeSecret                 [23] TLS13HandshakeSecretInfo OPTIONAL,
 *     -- The keys used by the cipher suite to encrypt the handshake are
 *     -- derived from client- and serverHandshakeTrafficSecret as
 *     -- described in clause 7.3.
 *     clientHandshakeTrafficSecret    [24] OCTET STRING (SIZE(1..65535)),
 *     serverHandshakeTrafficSecret    [25] OCTET STRING (SIZE(1..65535)),
 *     masterSecret                    [26] TLS13MasterSecretInfo OPTIONAL,
 *     -- The client and server application traffic secrets
 *     -- can change value during an ongoing session due to
 *     -- KeyUdpateRequest messages. The values to be provided below
 *     -- refer to the currently valid ones when the IRI message is
 *     -- generated.
 *     -- The keys used by the cipher suite to encrypt the application
 *     -- traffic are derived from client- and serverApplicationTrafficSecret
 *     -- as described in clause 7.3.
 *     clientApplicationTrafficSecret  [27] OCTET STRING (SIZE(1..65535)),
 *     serverApplicationTrafficSecret  [28] OCTET STRING (SIZE(1..65535)),
 *     -- Other session-specific keys.
 *     exporterMasterSecret            [29] OCTET STRING (SIZE(1..65535)),
 *     resumptionMasterSecret          [30] OCTET STRING (SIZE(1..65535)),
 *     -- Tickets for resumption (issued during current session), clause 4.6.2.
 *     tLSResumptionTickets            [31] SEQUENCE OF TLS13NewSessionTicket OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TLS13UAStarParams {
    constructor (
        /**
         * @summary `offeredPSKs`.
         * @public
         * @readonly
         */
        readonly offeredPSKs: TLS13OfferedPSK[],
        /**
         * @summary `offeredPSKKeyExchangeModes`.
         * @public
         * @readonly
         */
        readonly offeredPSKKeyExchangeModes: TLS13PSKKeyExchangeMode[],
        /**
         * @summary `selectedPSKIdentity`.
         * @public
         * @readonly
         */
        readonly selectedPSKIdentity: INTEGER,
        /**
         * @summary `selectedPSK`.
         * @public
         * @readonly
         */
        readonly selectedPSK: TLS13PSKInfo,
        /**
         * @summary `kDFAlgorithm`.
         * @public
         * @readonly
         */
        readonly kDFAlgorithm: TLS13KDFAlgorithm,
        /**
         * @summary `clientSupportedCipherSuites`.
         * @public
         * @readonly
         */
        readonly clientSupportedCipherSuites: OPTIONAL<TLS13CipherSuite[]>,
        /**
         * @summary `selectedCipherSuite`.
         * @public
         * @readonly
         */
        readonly selectedCipherSuite: TLS13CipherSuite,
        /**
         * @summary `clientSequenceNumber`.
         * @public
         * @readonly
         */
        readonly clientSequenceNumber: INTEGER,
        /**
         * @summary `serverSequenceNumber`.
         * @public
         * @readonly
         */
        readonly serverSequenceNumber: INTEGER,
        /**
         * @summary `clientRandom`.
         * @public
         * @readonly
         */
        readonly clientRandom: OCTET_STRING,
        /**
         * @summary `serverRandom`.
         * @public
         * @readonly
         */
        readonly serverRandom: OCTET_STRING,
        /**
         * @summary `legacySessionID`.
         * @public
         * @readonly
         */
        readonly legacySessionID: OCTET_STRING,
        /**
         * @summary `tLSClientHelloExtensions`.
         * @public
         * @readonly
         */
        readonly tLSClientHelloExtensions: TLS13Extension[],
        /**
         * @summary `tLSServerHelloExtensions`.
         * @public
         * @readonly
         */
        readonly tLSServerHelloExtensions: TLS13Extension[],
        /**
         * @summary `tLSPlaintextEncryptedExtensions`.
         * @public
         * @readonly
         */
        readonly tLSPlaintextEncryptedExtensions: OPTIONAL<TLS13Extension[]>,
        /**
         * @summary `tLSPlaintextClientCertificate`.
         * @public
         * @readonly
         */
        readonly tLSPlaintextClientCertificate: OPTIONAL<TLS13Certificate>,
        /**
         * @summary `tLSPlaintextServerCertificate`.
         * @public
         * @readonly
         */
        readonly tLSPlaintextServerCertificate: OPTIONAL<TLS13Certificate>,
        /**
         * @summary `earlySecret`.
         * @public
         * @readonly
         */
        readonly earlySecret: OPTIONAL<TLS13EarlySecretInfo>,
        /**
         * @summary `binderKey`.
         * @public
         * @readonly
         */
        readonly binderKey: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `clientEarlyTrafficSecret`.
         * @public
         * @readonly
         */
        readonly clientEarlyTrafficSecret: OCTET_STRING,
        /**
         * @summary `earlyExporterMasterSecret`.
         * @public
         * @readonly
         */
        readonly earlyExporterMasterSecret: OCTET_STRING,
        /**
         * @summary `sharedKey`.
         * @public
         * @readonly
         */
        readonly sharedKey: OPTIONAL<TLS13EstablishedSecrets>,
        /**
         * @summary `handshakeSecret`.
         * @public
         * @readonly
         */
        readonly handshakeSecret: OPTIONAL<TLS13HandshakeSecretInfo>,
        /**
         * @summary `clientHandshakeTrafficSecret`.
         * @public
         * @readonly
         */
        readonly clientHandshakeTrafficSecret: OCTET_STRING,
        /**
         * @summary `serverHandshakeTrafficSecret`.
         * @public
         * @readonly
         */
        readonly serverHandshakeTrafficSecret: OCTET_STRING,
        /**
         * @summary `masterSecret`.
         * @public
         * @readonly
         */
        readonly masterSecret: OPTIONAL<TLS13MasterSecretInfo>,
        /**
         * @summary `clientApplicationTrafficSecret`.
         * @public
         * @readonly
         */
        readonly clientApplicationTrafficSecret: OCTET_STRING,
        /**
         * @summary `serverApplicationTrafficSecret`.
         * @public
         * @readonly
         */
        readonly serverApplicationTrafficSecret: OCTET_STRING,
        /**
         * @summary `exporterMasterSecret`.
         * @public
         * @readonly
         */
        readonly exporterMasterSecret: OCTET_STRING,
        /**
         * @summary `resumptionMasterSecret`.
         * @public
         * @readonly
         */
        readonly resumptionMasterSecret: OCTET_STRING,
        /**
         * @summary `tLSResumptionTickets`.
         * @public
         * @readonly
         */
        readonly tLSResumptionTickets: OPTIONAL<TLS13NewSessionTicket[]>
    ) {}

    /**
     * @summary Restructures an object into a TLS13UAStarParams
     * @description
     * 
     * This takes an `object` and converts it to a `TLS13UAStarParams`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TLS13UAStarParams`.
     * @returns {TLS13UAStarParams}
     */
    public static _from_object (_o: { [_K in keyof (TLS13UAStarParams)]: (TLS13UAStarParams)[_K] }): TLS13UAStarParams {
        return new TLS13UAStarParams(_o.offeredPSKs, _o.offeredPSKKeyExchangeModes, _o.selectedPSKIdentity, _o.selectedPSK, _o.kDFAlgorithm, _o.clientSupportedCipherSuites, _o.selectedCipherSuite, _o.clientSequenceNumber, _o.serverSequenceNumber, _o.clientRandom, _o.serverRandom, _o.legacySessionID, _o.tLSClientHelloExtensions, _o.tLSServerHelloExtensions, _o.tLSPlaintextEncryptedExtensions, _o.tLSPlaintextClientCertificate, _o.tLSPlaintextServerCertificate, _o.earlySecret, _o.binderKey, _o.clientEarlyTrafficSecret, _o.earlyExporterMasterSecret, _o.sharedKey, _o.handshakeSecret, _o.clientHandshakeTrafficSecret, _o.serverHandshakeTrafficSecret, _o.masterSecret, _o.clientApplicationTrafficSecret, _o.serverApplicationTrafficSecret, _o.exporterMasterSecret, _o.resumptionMasterSecret, _o.tLSResumptionTickets);
    }

        /**
         * @summary The enum used as the type of the component `kDFAlgorithm`
         * @public
         * @static
         */

    public static _enum_for_kDFAlgorithm = _enum_for_TLS13KDFAlgorithm;
}

/**
 * @summary The Leading Root Component Types of TLS13UAStarParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TLS13UAStarParams: $.ComponentSpec[] = [
    new $.ComponentSpec("offeredPSKs", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("offeredPSKKeyExchangeModes", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("selectedPSKIdentity", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("selectedPSK", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("kDFAlgorithm", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("clientSupportedCipherSuites", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("selectedCipherSuite", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("clientSequenceNumber", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("serverSequenceNumber", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("clientRandom", false, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("serverRandom", false, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("legacySessionID", false, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("tLSClientHelloExtensions", false, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("tLSServerHelloExtensions", false, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("tLSPlaintextEncryptedExtensions", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("tLSPlaintextClientCertificate", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("tLSPlaintextServerCertificate", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("earlySecret", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("binderKey", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("clientEarlyTrafficSecret", false, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("earlyExporterMasterSecret", false, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("sharedKey", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("handshakeSecret", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("clientHandshakeTrafficSecret", false, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("serverHandshakeTrafficSecret", false, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("masterSecret", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("clientApplicationTrafficSecret", false, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("serverApplicationTrafficSecret", false, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("exporterMasterSecret", false, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("resumptionMasterSecret", false, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("tLSResumptionTickets", true, $.hasTag(_TagClass.context, 31))
];

/**
 * @summary The Trailing Root Component Types of TLS13UAStarParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TLS13UAStarParams: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TLS13UAStarParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TLS13UAStarParams: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TLS13UAStarParams: $.ASN1Decoder<TLS13UAStarParams> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TLS13UAStarParams
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TLS13UAStarParams (el: _Element): TLS13UAStarParams {
    if (!_cached_decoder_for_TLS13UAStarParams) { _cached_decoder_for_TLS13UAStarParams = function (el: _Element): TLS13UAStarParams {
    let offeredPSKs!: TLS13OfferedPSK[];
    let offeredPSKKeyExchangeModes!: TLS13PSKKeyExchangeMode[];
    let selectedPSKIdentity!: INTEGER;
    let selectedPSK!: TLS13PSKInfo;
    let kDFAlgorithm!: TLS13KDFAlgorithm;
    let clientSupportedCipherSuites: OPTIONAL<TLS13CipherSuite[]>;
    let selectedCipherSuite!: TLS13CipherSuite;
    let clientSequenceNumber!: INTEGER;
    let serverSequenceNumber!: INTEGER;
    let clientRandom!: OCTET_STRING;
    let serverRandom!: OCTET_STRING;
    let legacySessionID!: OCTET_STRING;
    let tLSClientHelloExtensions!: TLS13Extension[];
    let tLSServerHelloExtensions!: TLS13Extension[];
    let tLSPlaintextEncryptedExtensions: OPTIONAL<TLS13Extension[]>;
    let tLSPlaintextClientCertificate: OPTIONAL<TLS13Certificate>;
    let tLSPlaintextServerCertificate: OPTIONAL<TLS13Certificate>;
    let earlySecret: OPTIONAL<TLS13EarlySecretInfo>;
    let binderKey: OPTIONAL<OCTET_STRING>;
    let clientEarlyTrafficSecret!: OCTET_STRING;
    let earlyExporterMasterSecret!: OCTET_STRING;
    let sharedKey: OPTIONAL<TLS13EstablishedSecrets>;
    let handshakeSecret: OPTIONAL<TLS13HandshakeSecretInfo>;
    let clientHandshakeTrafficSecret!: OCTET_STRING;
    let serverHandshakeTrafficSecret!: OCTET_STRING;
    let masterSecret: OPTIONAL<TLS13MasterSecretInfo>;
    let clientApplicationTrafficSecret!: OCTET_STRING;
    let serverApplicationTrafficSecret!: OCTET_STRING;
    let exporterMasterSecret!: OCTET_STRING;
    let resumptionMasterSecret!: OCTET_STRING;
    let tLSResumptionTickets: OPTIONAL<TLS13NewSessionTicket[]>;
    const callbacks: $.DecodingMap = {
        "offeredPSKs": (_el: _Element): void => { offeredPSKs = $._decode_implicit<TLS13OfferedPSK[]>(() => $._decodeSequenceOf<TLS13OfferedPSK>(() => _decode_TLS13OfferedPSK))(_el); },
        "offeredPSKKeyExchangeModes": (_el: _Element): void => { offeredPSKKeyExchangeModes = $._decode_implicit<TLS13PSKKeyExchangeMode[]>(() => $._decodeSequenceOf<TLS13PSKKeyExchangeMode>(() => _decode_TLS13PSKKeyExchangeMode))(_el); },
        "selectedPSKIdentity": (_el: _Element): void => { selectedPSKIdentity = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "selectedPSK": (_el: _Element): void => { selectedPSK = $._decode_implicit<TLS13PSKInfo>(() => _decode_TLS13PSKInfo)(_el); },
        "kDFAlgorithm": (_el: _Element): void => { kDFAlgorithm = $._decode_implicit<TLS13KDFAlgorithm>(() => _decode_TLS13KDFAlgorithm)(_el); },
        "clientSupportedCipherSuites": (_el: _Element): void => { clientSupportedCipherSuites = $._decode_implicit<TLS13CipherSuite[]>(() => $._decodeSequenceOf<TLS13CipherSuite>(() => _decode_TLS13CipherSuite))(_el); },
        "selectedCipherSuite": (_el: _Element): void => { selectedCipherSuite = $._decode_explicit<TLS13CipherSuite>(() => _decode_TLS13CipherSuite)(_el); },
        "clientSequenceNumber": (_el: _Element): void => { clientSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serverSequenceNumber": (_el: _Element): void => { serverSequenceNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "clientRandom": (_el: _Element): void => { clientRandom = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serverRandom": (_el: _Element): void => { serverRandom = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "legacySessionID": (_el: _Element): void => { legacySessionID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tLSClientHelloExtensions": (_el: _Element): void => { tLSClientHelloExtensions = $._decode_implicit<TLS13Extension[]>(() => $._decodeSequenceOf<TLS13Extension>(() => _decode_TLS13Extension))(_el); },
        "tLSServerHelloExtensions": (_el: _Element): void => { tLSServerHelloExtensions = $._decode_implicit<TLS13Extension[]>(() => $._decodeSequenceOf<TLS13Extension>(() => _decode_TLS13Extension))(_el); },
        "tLSPlaintextEncryptedExtensions": (_el: _Element): void => { tLSPlaintextEncryptedExtensions = $._decode_implicit<TLS13Extension[]>(() => $._decodeSequenceOf<TLS13Extension>(() => _decode_TLS13Extension))(_el); },
        "tLSPlaintextClientCertificate": (_el: _Element): void => { tLSPlaintextClientCertificate = $._decode_implicit<TLS13Certificate>(() => _decode_TLS13Certificate)(_el); },
        "tLSPlaintextServerCertificate": (_el: _Element): void => { tLSPlaintextServerCertificate = $._decode_implicit<TLS13Certificate>(() => _decode_TLS13Certificate)(_el); },
        "earlySecret": (_el: _Element): void => { earlySecret = $._decode_implicit<TLS13EarlySecretInfo>(() => _decode_TLS13EarlySecretInfo)(_el); },
        "binderKey": (_el: _Element): void => { binderKey = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "clientEarlyTrafficSecret": (_el: _Element): void => { clientEarlyTrafficSecret = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "earlyExporterMasterSecret": (_el: _Element): void => { earlyExporterMasterSecret = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "sharedKey": (_el: _Element): void => { sharedKey = $._decode_implicit<TLS13EstablishedSecrets>(() => _decode_TLS13EstablishedSecrets)(_el); },
        "handshakeSecret": (_el: _Element): void => { handshakeSecret = $._decode_implicit<TLS13HandshakeSecretInfo>(() => _decode_TLS13HandshakeSecretInfo)(_el); },
        "clientHandshakeTrafficSecret": (_el: _Element): void => { clientHandshakeTrafficSecret = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serverHandshakeTrafficSecret": (_el: _Element): void => { serverHandshakeTrafficSecret = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "masterSecret": (_el: _Element): void => { masterSecret = $._decode_implicit<TLS13MasterSecretInfo>(() => _decode_TLS13MasterSecretInfo)(_el); },
        "clientApplicationTrafficSecret": (_el: _Element): void => { clientApplicationTrafficSecret = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serverApplicationTrafficSecret": (_el: _Element): void => { serverApplicationTrafficSecret = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "exporterMasterSecret": (_el: _Element): void => { exporterMasterSecret = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "resumptionMasterSecret": (_el: _Element): void => { resumptionMasterSecret = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "tLSResumptionTickets": (_el: _Element): void => { tLSResumptionTickets = $._decode_implicit<TLS13NewSessionTicket[]>(() => $._decodeSequenceOf<TLS13NewSessionTicket>(() => _decode_TLS13NewSessionTicket))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TLS13UAStarParams,
        _extension_additions_list_spec_for_TLS13UAStarParams,
        _root_component_type_list_2_spec_for_TLS13UAStarParams,
        undefined,
    );
    return new TLS13UAStarParams(
        offeredPSKs,
        offeredPSKKeyExchangeModes,
        selectedPSKIdentity,
        selectedPSK,
        kDFAlgorithm,
        clientSupportedCipherSuites,
        selectedCipherSuite,
        clientSequenceNumber,
        serverSequenceNumber,
        clientRandom,
        serverRandom,
        legacySessionID,
        tLSClientHelloExtensions,
        tLSServerHelloExtensions,
        tLSPlaintextEncryptedExtensions,
        tLSPlaintextClientCertificate,
        tLSPlaintextServerCertificate,
        earlySecret,
        binderKey,
        clientEarlyTrafficSecret,
        earlyExporterMasterSecret,
        sharedKey,
        handshakeSecret,
        clientHandshakeTrafficSecret,
        serverHandshakeTrafficSecret,
        masterSecret,
        clientApplicationTrafficSecret,
        serverApplicationTrafficSecret,
        exporterMasterSecret,
        resumptionMasterSecret,
        tLSResumptionTickets
    );
}; }
    return _cached_decoder_for_TLS13UAStarParams(el);
}

let _cached_encoder_for_TLS13UAStarParams: $.ASN1Encoder<TLS13UAStarParams> | null = null;

/**
 * @summary Encodes a(n) TLS13UAStarParams into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLS13UAStarParams, encoded as an ASN.1 Element.
 */
export
function _encode_TLS13UAStarParams (value: TLS13UAStarParams, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TLS13UAStarParams) { _cached_encoder_for_TLS13UAStarParams = function (value: TLS13UAStarParams, elGetter: $.ASN1Encoder<TLS13UAStarParams>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<TLS13OfferedPSK>(() => _encode_TLS13OfferedPSK, $.BER), $.BER)(value.offeredPSKs, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<TLS13PSKKeyExchangeMode>(() => _encode_TLS13PSKKeyExchangeMode, $.BER), $.BER)(value.offeredPSKKeyExchangeModes, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.selectedPSKIdentity, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_TLS13PSKInfo, $.BER)(value.selectedPSK, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_TLS13KDFAlgorithm, $.BER)(value.kDFAlgorithm, $.BER),
            /* IF_ABSENT  */ ((value.clientSupportedCipherSuites === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<TLS13CipherSuite>(() => _encode_TLS13CipherSuite, $.BER), $.BER)(value.clientSupportedCipherSuites, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 7, () => _encode_TLS13CipherSuite, $.BER)(value.selectedCipherSuite, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeInteger, $.BER)(value.clientSequenceNumber, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeInteger, $.BER)(value.serverSequenceNumber, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 10, () => $._encodeOctetString, $.BER)(value.clientRandom, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 11, () => $._encodeOctetString, $.BER)(value.serverRandom, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 12, () => $._encodeOctetString, $.BER)(value.legacySessionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 13, () => $._encodeSequenceOf<TLS13Extension>(() => _encode_TLS13Extension, $.BER), $.BER)(value.tLSClientHelloExtensions, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 14, () => $._encodeSequenceOf<TLS13Extension>(() => _encode_TLS13Extension, $.BER), $.BER)(value.tLSServerHelloExtensions, $.BER),
            /* IF_ABSENT  */ ((value.tLSPlaintextEncryptedExtensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => $._encodeSequenceOf<TLS13Extension>(() => _encode_TLS13Extension, $.BER), $.BER)(value.tLSPlaintextEncryptedExtensions, $.BER)),
            /* IF_ABSENT  */ ((value.tLSPlaintextClientCertificate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_TLS13Certificate, $.BER)(value.tLSPlaintextClientCertificate, $.BER)),
            /* IF_ABSENT  */ ((value.tLSPlaintextServerCertificate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_TLS13Certificate, $.BER)(value.tLSPlaintextServerCertificate, $.BER)),
            /* IF_ABSENT  */ ((value.earlySecret === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_TLS13EarlySecretInfo, $.BER)(value.earlySecret, $.BER)),
            /* IF_ABSENT  */ ((value.binderKey === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => $._encodeOctetString, $.BER)(value.binderKey, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 20, () => $._encodeOctetString, $.BER)(value.clientEarlyTrafficSecret, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 21, () => $._encodeOctetString, $.BER)(value.earlyExporterMasterSecret, $.BER),
            /* IF_ABSENT  */ ((value.sharedKey === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_TLS13EstablishedSecrets, $.BER)(value.sharedKey, $.BER)),
            /* IF_ABSENT  */ ((value.handshakeSecret === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => _encode_TLS13HandshakeSecretInfo, $.BER)(value.handshakeSecret, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 24, () => $._encodeOctetString, $.BER)(value.clientHandshakeTrafficSecret, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 25, () => $._encodeOctetString, $.BER)(value.serverHandshakeTrafficSecret, $.BER),
            /* IF_ABSENT  */ ((value.masterSecret === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => _encode_TLS13MasterSecretInfo, $.BER)(value.masterSecret, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 27, () => $._encodeOctetString, $.BER)(value.clientApplicationTrafficSecret, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 28, () => $._encodeOctetString, $.BER)(value.serverApplicationTrafficSecret, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 29, () => $._encodeOctetString, $.BER)(value.exporterMasterSecret, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 30, () => $._encodeOctetString, $.BER)(value.resumptionMasterSecret, $.BER),
            /* IF_ABSENT  */ ((value.tLSResumptionTickets === undefined) ? undefined : $._encode_implicit(_TagClass.context, 31, () => $._encodeSequenceOf<TLS13NewSessionTicket>(() => _encode_TLS13NewSessionTicket, $.BER), $.BER)(value.tLSResumptionTickets, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TLS13UAStarParams(value, elGetter);
}


/* eslint-enable */
