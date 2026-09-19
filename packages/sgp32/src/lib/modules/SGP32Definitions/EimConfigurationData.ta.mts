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
import { EimIdType, EimIdType_eimIdTypeOid /* IMPORTED_LONG_NAMED_INTEGER */, eimIdTypeOid /* IMPORTED_SHORT_NAMED_INTEGER */, EimIdType_eimIdTypeFqdn /* IMPORTED_LONG_NAMED_INTEGER */, eimIdTypeFqdn /* IMPORTED_SHORT_NAMED_INTEGER */, EimIdType_eimIdTypeProprietary /* IMPORTED_LONG_NAMED_INTEGER */, eimIdTypeProprietary /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EimIdType, _encode_EimIdType } from "../SGP32Definitions/EimIdType.ta.mjs";
// export { EimIdType, EimIdType_eimIdTypeOid /* IMPORTED_LONG_NAMED_INTEGER */, eimIdTypeOid /* IMPORTED_SHORT_NAMED_INTEGER */, EimIdType_eimIdTypeFqdn /* IMPORTED_LONG_NAMED_INTEGER */, eimIdTypeFqdn /* IMPORTED_SHORT_NAMED_INTEGER */, EimIdType_eimIdTypeProprietary /* IMPORTED_LONG_NAMED_INTEGER */, eimIdTypeProprietary /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_EimIdType, _encode_EimIdType } from "../SGP32Definitions/EimIdType.ta.mjs";
import { EimConfigurationData_eimPublicKeyData, _decode_EimConfigurationData_eimPublicKeyData, _encode_EimConfigurationData_eimPublicKeyData } from "../SGP32Definitions/EimConfigurationData-eimPublicKeyData.ta.mjs";
// export { EimConfigurationData_eimPublicKeyData, _decode_EimConfigurationData_eimPublicKeyData, _encode_EimConfigurationData_eimPublicKeyData } from "../SGP32Definitions/EimConfigurationData-eimPublicKeyData.ta.mjs";
import { EimConfigurationData_trustedPublicKeyDataTls, _decode_EimConfigurationData_trustedPublicKeyDataTls, _encode_EimConfigurationData_trustedPublicKeyDataTls } from "../SGP32Definitions/EimConfigurationData-trustedPublicKeyDataTls.ta.mjs";
// export { EimConfigurationData_trustedPublicKeyDataTls, _decode_EimConfigurationData_trustedPublicKeyDataTls, _encode_EimConfigurationData_trustedPublicKeyDataTls } from "../SGP32Definitions/EimConfigurationData-trustedPublicKeyDataTls.ta.mjs";
import { EimSupportedProtocol, EimSupportedProtocol_eimRetrieveHttps /* IMPORTED_LONG_NAMED_BIT */, eimRetrieveHttps /* IMPORTED_SHORT_NAMED_BIT */, EimSupportedProtocol_eimRetrieveCoaps /* IMPORTED_LONG_NAMED_BIT */, eimRetrieveCoaps /* IMPORTED_SHORT_NAMED_BIT */, EimSupportedProtocol_eimInjectHttps /* IMPORTED_LONG_NAMED_BIT */, eimInjectHttps /* IMPORTED_SHORT_NAMED_BIT */, EimSupportedProtocol_eimInjectCoaps /* IMPORTED_LONG_NAMED_BIT */, eimInjectCoaps /* IMPORTED_SHORT_NAMED_BIT */, EimSupportedProtocol_eimProprietary /* IMPORTED_LONG_NAMED_BIT */, eimProprietary /* IMPORTED_SHORT_NAMED_BIT */, _decode_EimSupportedProtocol, _encode_EimSupportedProtocol } from "../SGP32Definitions/EimSupportedProtocol.ta.mjs";
// export { EimSupportedProtocol, EimSupportedProtocol_eimRetrieveHttps /* IMPORTED_LONG_NAMED_BIT */, eimRetrieveHttps /* IMPORTED_SHORT_NAMED_BIT */, EimSupportedProtocol_eimRetrieveCoaps /* IMPORTED_LONG_NAMED_BIT */, eimRetrieveCoaps /* IMPORTED_SHORT_NAMED_BIT */, EimSupportedProtocol_eimInjectHttps /* IMPORTED_LONG_NAMED_BIT */, eimInjectHttps /* IMPORTED_SHORT_NAMED_BIT */, EimSupportedProtocol_eimInjectCoaps /* IMPORTED_LONG_NAMED_BIT */, eimInjectCoaps /* IMPORTED_SHORT_NAMED_BIT */, EimSupportedProtocol_eimProprietary /* IMPORTED_LONG_NAMED_BIT */, eimProprietary /* IMPORTED_SHORT_NAMED_BIT */, _decode_EimSupportedProtocol, _encode_EimSupportedProtocol } from "../SGP32Definitions/EimSupportedProtocol.ta.mjs";
import { SubjectKeyIdentifier, _decode_SubjectKeyIdentifier, _encode_SubjectKeyIdentifier } from "../PKIX1Implicit88/SubjectKeyIdentifier.ta.mjs";
// export { SubjectKeyIdentifier, _decode_SubjectKeyIdentifier, _encode_SubjectKeyIdentifier } from "../PKIX1Implicit88/SubjectKeyIdentifier.ta.mjs";
import { VendorSpecificExtension, _decode_VendorSpecificExtension, _encode_VendorSpecificExtension } from "../RSPDefinitions/VendorSpecificExtension.ta.mjs";
// export { VendorSpecificExtension, _decode_VendorSpecificExtension, _encode_VendorSpecificExtension } from "../RSPDefinitions/VendorSpecificExtension.ta.mjs";


/**
 * @summary EimConfigurationData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EimConfigurationData ::= SEQUENCE {
 *     eimId [0] UTF8String (SIZE(1..128)), -- eimId of eIM
 *     eimFqdn [1] UTF8String OPTIONAL, -- FQDN of eIM or intermediate server, if used
 *     eimIdType [2] EimIdType OPTIONAL,
 *     counterValue [3] INTEGER OPTIONAL, -- initial counterValue for the eIM
 *     associationToken [4] INTEGER OPTIONAL,    
 *     eimPublicKeyData [5] CHOICE {
 *         eimPublicKey SubjectPublicKeyInfo, -- public key of eIM, used for eUICC Package signature verification, where the encoding follows X.509 standard
 *         eimCertificate Certificate -- certificate of eIM, used for eUICC Package signature verification, where the encoding follows X.509 standard
 *     } OPTIONAL, 
 *     trustedPublicKeyDataTls [6] CHOICE {
 *         trustedEimPkTls SubjectPublicKeyInfo, -- public key of eIM, used for TLS or DTLS, where the encoding follows X.509 standard
 *         trustedCertificateTls Certificate -- either the certificate of eIM, used for (D)TLS, or the certificate of the CA, where the encoding follows X.509 standard
 *     } OPTIONAL,
 *     eimSupportedProtocol [7] EimSupportedProtocol OPTIONAL,
 *     euiccCiPKId [8] SubjectKeyIdentifier OPTIONAL, -- CI Public Key Identifier supported on the eUICC for signature creation
 *     indirectProfileDownload [9] NULL OPTIONAL, -- support of Indirect Profile download with indicated EimSupportedProtocol
 *     eSipaProprietaryProtocolInformation [10] VendorSpecificExtension OPTIONAL -- Additional information for proprietary protocol(s)
 * 
 * }
 * ```
 * 
 * @class
 */
export
class EimConfigurationData {
    constructor (
        /**
         * @summary `eimId`.
         * @public
         * @readonly
         */
        readonly eimId: UTF8String,
        /**
         * @summary `eimFqdn`.
         * @public
         * @readonly
         */
        readonly eimFqdn: OPTIONAL<UTF8String>,
        /**
         * @summary `eimIdType`.
         * @public
         * @readonly
         */
        readonly eimIdType: OPTIONAL<EimIdType>,
        /**
         * @summary `counterValue`.
         * @public
         * @readonly
         */
        readonly counterValue: OPTIONAL<INTEGER>,
        /**
         * @summary `associationToken`.
         * @public
         * @readonly
         */
        readonly associationToken: OPTIONAL<INTEGER>,
        /**
         * @summary `eimPublicKeyData`.
         * @public
         * @readonly
         */
        readonly eimPublicKeyData: OPTIONAL<EimConfigurationData_eimPublicKeyData>,
        /**
         * @summary `trustedPublicKeyDataTls`.
         * @public
         * @readonly
         */
        readonly trustedPublicKeyDataTls: OPTIONAL<EimConfigurationData_trustedPublicKeyDataTls>,
        /**
         * @summary `eimSupportedProtocol`.
         * @public
         * @readonly
         */
        readonly eimSupportedProtocol: OPTIONAL<EimSupportedProtocol>,
        /**
         * @summary `euiccCiPKId`.
         * @public
         * @readonly
         */
        readonly euiccCiPKId: OPTIONAL<SubjectKeyIdentifier>,
        /**
         * @summary `indirectProfileDownload`.
         * @public
         * @readonly
         */
        readonly indirectProfileDownload: OPTIONAL<NULL>,
        /**
         * @summary `eSipaProprietaryProtocolInformation`.
         * @public
         * @readonly
         */
        readonly eSipaProprietaryProtocolInformation: OPTIONAL<VendorSpecificExtension>
    ) {}

    /**
     * @summary Restructures an object into a EimConfigurationData
     * @description
     * 
     * This takes an `object` and converts it to a `EimConfigurationData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EimConfigurationData`.
     * @returns {EimConfigurationData}
     */
    public static _from_object (_o: { [_K in keyof (EimConfigurationData)]: (EimConfigurationData)[_K] }): EimConfigurationData {
        return new EimConfigurationData(_o.eimId, _o.eimFqdn, _o.eimIdType, _o.counterValue, _o.associationToken, _o.eimPublicKeyData, _o.trustedPublicKeyDataTls, _o.eimSupportedProtocol, _o.euiccCiPKId, _o.indirectProfileDownload, _o.eSipaProprietaryProtocolInformation);
    }


}

/**
 * @summary The Leading Root Component Types of EimConfigurationData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EimConfigurationData: $.ComponentSpec[] = [
    new $.ComponentSpec("eimId", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eimFqdn", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("eimIdType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("counterValue", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("associationToken", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("eimPublicKeyData", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("trustedPublicKeyDataTls", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("eimSupportedProtocol", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("euiccCiPKId", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("indirectProfileDownload", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("eSipaProprietaryProtocolInformation", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of EimConfigurationData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EimConfigurationData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EimConfigurationData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EimConfigurationData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EimConfigurationData: $.ASN1Decoder<EimConfigurationData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EimConfigurationData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EimConfigurationData (el: _Element): EimConfigurationData {
    if (!_cached_decoder_for_EimConfigurationData) { _cached_decoder_for_EimConfigurationData = function (el: _Element): EimConfigurationData {
    let eimId!: UTF8String;
    let eimFqdn: OPTIONAL<UTF8String>;
    let eimIdType: OPTIONAL<EimIdType>;
    let counterValue: OPTIONAL<INTEGER>;
    let associationToken: OPTIONAL<INTEGER>;
    let eimPublicKeyData: OPTIONAL<EimConfigurationData_eimPublicKeyData>;
    let trustedPublicKeyDataTls: OPTIONAL<EimConfigurationData_trustedPublicKeyDataTls>;
    let eimSupportedProtocol: OPTIONAL<EimSupportedProtocol>;
    let euiccCiPKId: OPTIONAL<SubjectKeyIdentifier>;
    let indirectProfileDownload: OPTIONAL<NULL>;
    let eSipaProprietaryProtocolInformation: OPTIONAL<VendorSpecificExtension>;
    const callbacks: $.DecodingMap = {
        "eimId": (_el: _Element): void => { eimId = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "eimFqdn": (_el: _Element): void => { eimFqdn = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); },
        "eimIdType": (_el: _Element): void => { eimIdType = $._decode_implicit<EimIdType>(() => _decode_EimIdType)(_el); },
        "counterValue": (_el: _Element): void => { counterValue = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "associationToken": (_el: _Element): void => { associationToken = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "eimPublicKeyData": (_el: _Element): void => { eimPublicKeyData = $._decode_explicit<EimConfigurationData_eimPublicKeyData>(() => _decode_EimConfigurationData_eimPublicKeyData)(_el); },
        "trustedPublicKeyDataTls": (_el: _Element): void => { trustedPublicKeyDataTls = $._decode_explicit<EimConfigurationData_trustedPublicKeyDataTls>(() => _decode_EimConfigurationData_trustedPublicKeyDataTls)(_el); },
        "eimSupportedProtocol": (_el: _Element): void => { eimSupportedProtocol = $._decode_implicit<EimSupportedProtocol>(() => _decode_EimSupportedProtocol)(_el); },
        "euiccCiPKId": (_el: _Element): void => { euiccCiPKId = $._decode_implicit<SubjectKeyIdentifier>(() => _decode_SubjectKeyIdentifier)(_el); },
        "indirectProfileDownload": (_el: _Element): void => { indirectProfileDownload = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "eSipaProprietaryProtocolInformation": (_el: _Element): void => { eSipaProprietaryProtocolInformation = $._decode_implicit<VendorSpecificExtension>(() => _decode_VendorSpecificExtension)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EimConfigurationData,
        _extension_additions_list_spec_for_EimConfigurationData,
        _root_component_type_list_2_spec_for_EimConfigurationData,
        undefined,
    );
    return new EimConfigurationData(
        eimId,
        eimFqdn,
        eimIdType,
        counterValue,
        associationToken,
        eimPublicKeyData,
        trustedPublicKeyDataTls,
        eimSupportedProtocol,
        euiccCiPKId,
        indirectProfileDownload,
        eSipaProprietaryProtocolInformation
    );
}; }
    return _cached_decoder_for_EimConfigurationData(el);
}

let _cached_encoder_for_EimConfigurationData: $.ASN1Encoder<EimConfigurationData> | null = null;

/**
 * @summary Encodes a(n) EimConfigurationData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EimConfigurationData, encoded as an ASN.1 Element.
 */
export
function _encode_EimConfigurationData (value: EimConfigurationData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EimConfigurationData) { _cached_encoder_for_EimConfigurationData = function (value: EimConfigurationData, elGetter: $.ASN1Encoder<EimConfigurationData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeUTF8String, $.BER)(value.eimId, $.BER),
            /* IF_ABSENT  */ ((value.eimFqdn === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.eimFqdn, $.BER)),
            /* IF_ABSENT  */ ((value.eimIdType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_EimIdType, $.BER)(value.eimIdType, $.BER)),
            /* IF_ABSENT  */ ((value.counterValue === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.counterValue, $.BER)),
            /* IF_ABSENT  */ ((value.associationToken === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.associationToken, $.BER)),
            /* IF_ABSENT  */ ((value.eimPublicKeyData === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_EimConfigurationData_eimPublicKeyData, $.BER)(value.eimPublicKeyData, $.BER)),
            /* IF_ABSENT  */ ((value.trustedPublicKeyDataTls === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_EimConfigurationData_trustedPublicKeyDataTls, $.BER)(value.trustedPublicKeyDataTls, $.BER)),
            /* IF_ABSENT  */ ((value.eimSupportedProtocol === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_EimSupportedProtocol, $.BER)(value.eimSupportedProtocol, $.BER)),
            /* IF_ABSENT  */ ((value.euiccCiPKId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_SubjectKeyIdentifier, $.BER)(value.euiccCiPKId, $.BER)),
            /* IF_ABSENT  */ ((value.indirectProfileDownload === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeNull, $.BER)(value.indirectProfileDownload, $.BER)),
            /* IF_ABSENT  */ ((value.eSipaProprietaryProtocolInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_VendorSpecificExtension, $.BER)(value.eSipaProprietaryProtocolInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EimConfigurationData(value, elGetter);
}


/* eslint-enable */
