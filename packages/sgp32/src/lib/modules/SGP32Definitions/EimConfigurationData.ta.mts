/* eslint-disable */
import {
    INTEGER,
    NULL,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ASN1SizeError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EimIdType, _decode_EimIdType, _encode_EimIdType } from "../SGP32Definitions/EimIdType.ta.mjs";
import { EimConfigurationData_eimPublicKeyData, _decode_EimConfigurationData_eimPublicKeyData, _encode_EimConfigurationData_eimPublicKeyData } from "../SGP32Definitions/EimConfigurationData-eimPublicKeyData.ta.mjs";
import { EimConfigurationData_trustedPublicKeyDataTls, _decode_EimConfigurationData_trustedPublicKeyDataTls, _encode_EimConfigurationData_trustedPublicKeyDataTls } from "../SGP32Definitions/EimConfigurationData-trustedPublicKeyDataTls.ta.mjs";
import { EimSupportedProtocol, _decode_EimSupportedProtocol, _encode_EimSupportedProtocol } from "../SGP32Definitions/EimSupportedProtocol.ta.mjs";
import { type SubjectKeyIdentifier, _decode_SubjectKeyIdentifier, _encode_SubjectKeyIdentifier } from "@wildboar/x500/CertificateExtensions";
import { type VendorSpecificExtension, _decode_VendorSpecificExtension, _encode_VendorSpecificExtension } from "@wildboar/sgp22/RSPDefinitions";


/**
 * @summary EimConfigurationData
 * @description
 * 
 * eIM Configuration Data the eUICC stores for one Associated eIM, and the
 * object used when that data is added, updated, or read back (SGP.32 v1.2,
 * section 2.11.1.1).
 *
 * On addEim, eimId, counterValue, and eimPublicKeyData are mandatory. On
 * updateEim, eimId names the target and at least one of counterValue,
 * eimPublicKeyData, eimIdType, eimFqdn, eimSupportedProtocol,
 * trustedPublicKeyDataTls, euiccCiPKId, or indirectProfileDownload is present.
 * associationToken is omitted on updateEim. The stored eimId stays unchanged.
 * A lower counterValue is accepted only when eimPublicKeyData is updated in
 * the same command.
 *
 * Section 3.5.1.3 returns eimNotFound when the eimId is unknown or absent.
 * It returns commandError when associationToken is present, when
 * counterValue, eimPublicKeyData, eimIdType, eimFqdn, eimSupportedProtocol,
 * trustedPublicKeyDataTls, and euiccCiPKId are all absent, or when
 * counterValue moves downward while eimPublicKeyData is left unchanged.
 * ciPKUnknown is returned when euiccCiPKId is outside
 * euiccCiPKIdListForSigning in eUICCInfo2. deleteEim is a separate Eco
 * alternative that carries only the target eimId.
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
         * @description
         * Unique identifier of this Associated eIM inside the eUICC. Length is 1 to
         * 128 bytes (SGP.32 v1.2, sections 2.11.1.1 and 4.3). Mandatory on addEim,
         * updateEim, and deleteEim. On updateEim it selects the stored row; the stored
         * identifier itself stays unchanged.
         * @public
         * @readonly
         */
        readonly eimId: UTF8String,
        /**
         * @summary `eimFqdn`.
         * @description
         * FQDN of the eIM, or of an intermediate server such as an MQTT broker placed
         * between the eIM and the IoT Device (SGP.32 v1.2, section 2.11.1.1). Required
         * when eimIdType is eimIdTypeOid or eimIdTypeProprietary. When eimIdType is
         * eimIdTypeFqdn this component is omitted, because eimId already holds that
         * FQDN.
         * @public
         * @readonly
         */
        readonly eimFqdn: OPTIONAL<UTF8String>,
        /**
         * @summary `eimIdType`.
         * @description
         * Encoding of eimId: an OID, an FQDN, or a proprietary string (SGP.32 v1.2,
         * sections 2.11.1.1 and 4.3). Optional on add. When it is absent the eUICC
         * stores eimIdTypeProprietary before saving the configuration.
         * @public
         * @readonly
         */
        readonly eimIdType: OPTIONAL<EimIdType>,
        /**
         * @summary `counterValue`.
         * @description
         * Replay counter for eUICC Packages from this eIM. On addEim it is the initial
         * value and is mandatory. The eUICC stores the highest counter it has accepted
         * from this eIM and accepts a later package only when the new counter is
         * greater. The implementation handles values through 8388607 (0x7FFFFF)
         * inclusive; a larger value produces counterValueOutOfRange (SGP.32 v1.2,
         * sections 2.11.1.1 and 5.9.1). On updateEim a lower value is accepted only
         * together with a new eimPublicKeyData.
         * @public
         * @readonly
         */
        readonly counterValue: OPTIONAL<INTEGER>,
        /**
         * @summary `associationToken`.
         * @description
         * Optional anti-replay value taken from one eUICC-wide counter. That counter
         * starts at zero, advances by one each time a token is requested, and
         * therefore issues 1 as its first token. No operation, including eUICC Memory
         * Reset, resets it (SGP.32 v1.2, section 2.11.1.1).
         *
         * On addEim, the value -1 asks the eUICC to allocate the next token; any other
         * request omits this component. A value other than -1 on that request produces
         * invalidAssociationToken (section 5.9.4). On updateEim this component is
         * omitted. eIM and eUICC signatures are computed over the signed bytes
         * concatenated with this token; when no token is configured, the value zero is
         * used.
         * @public
         * @readonly
         */
        readonly associationToken: OPTIONAL<INTEGER>,
        /**
         * @summary `eimPublicKeyData`.
         * @description
         * eIM public key used to verify eUICC Package signatures, as a raw key or as a
         * certificate, X.509 encoded (SGP.32 v1.2, section 2.11.1.1). Mandatory on
         * addEim. On updateEim it may be one of the changed components, and it is
         * required when counterValue is lowered.
         * @public
         * @readonly
         */
        readonly eimPublicKeyData: OPTIONAL<EimConfigurationData_eimPublicKeyData>,
        /**
         * @summary `trustedPublicKeyDataTls`.
         * @description
         * Optional TLS or DTLS trust material for this eIM (SGP.32 v1.2, section
         * 2.11.1.1). It should be present on addEim when eUICCInfo2.ipaMode is ipae
         * and eimSupportedProtocol has eimRetrieveHttps or eimRetrieveCoaps set. An
         * IPAd may ignore it. Some IPAd implementations read it back with
         * GetEimConfigurationData, which requires that addEim included it.
         * @public
         * @readonly
         */
        readonly trustedPublicKeyDataTls: OPTIONAL<EimConfigurationData_trustedPublicKeyDataTls>,
        /**
         * @summary `eimSupportedProtocol`.
         * @description
         * ESipa transports and transfer methods this eIM supports (SGP.32 v1.2,
         * sections 2.11.1.1 and 4.2). Optional. When it is absent the eUICC stores the
         * value in which only the eimProprietary bit is set.
         * @public
         * @readonly
         */
        readonly eimSupportedProtocol: OPTIONAL<EimSupportedProtocol>,
        /**
         * @summary `euiccCiPKId`.
         * @description
         * CI public key identifier that selects the eUICC certificate used to sign
         * results returned to this eIM (SGP.32 v1.2, section 2.11.1.1). Optional. When
         * it is absent the eUICC stores the first entry of euiccCiPKIdListForSigning
         * in eUICCInfo2. A value outside that list produces ciPKUnknown (section
         * 3.5.1.1). When several SK.EUICC.ECDSA keys exist, the result is signed with
         * the key that chains to this CI public key (section 2.11.2.1).
         * @public
         * @readonly
         */
        readonly euiccCiPKId: OPTIONAL<SubjectKeyIdentifier>,
        /**
         * @summary `indirectProfileDownload`.
         * @description
         * Present when this eIM supports indirect Profile download using the protocol
         * named by eimSupportedProtocol (SGP.32 v1.2, section 2.11.1.1). On updateEim,
         * its presence satisfies the rule that at least one updatable component is
         * supplied.
         * @public
         * @readonly
         */
        readonly indirectProfileDownload: OPTIONAL<NULL>,
        /**
         * @summary `eSipaProprietaryProtocolInformation`.
         * @description
         * SGP.32 v1.2 does not further define this component. Section 2.11.1.1 and
         * Annex C end EimConfigurationData at indirectProfileDownload.
         * @public
         * @readonly
         */
        readonly eSipaProprietaryProtocolInformation: OPTIONAL<VendorSpecificExtension>
    ) {
        if (this.eimId.length < 1 || this.eimId.length > 128) {
            throw new ASN1SizeError("EimConfigurationData.eimId violates SIZE constraint");
        }
    }

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
    if (!_cached_encoder_for_EimConfigurationData) { _cached_encoder_for_EimConfigurationData = function (value: EimConfigurationData): _Element {
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
