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
import { AttCertVersion, AttCertVersion_v2 /* IMPORTED_LONG_NAMED_INTEGER */, v2 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AttCertVersion, _encode_AttCertVersion } from "../AttributeCertificateDefinitions/AttCertVersion.ta.mjs";
// export { AttCertVersion, AttCertVersion_v2 /* IMPORTED_LONG_NAMED_INTEGER */, v2 /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AttCertVersion, _encode_AttCertVersion } from "../AttributeCertificateDefinitions/AttCertVersion.ta.mjs";
import { Holder, _decode_Holder, _encode_Holder } from "../AttributeCertificateDefinitions/Holder.ta.mjs";
// export { Holder, _decode_Holder, _encode_Holder } from "../AttributeCertificateDefinitions/Holder.ta.mjs";
import { AttCertIssuer, _decode_AttCertIssuer, _encode_AttCertIssuer } from "../AttributeCertificateDefinitions/AttCertIssuer.ta.mjs";
// export { AttCertIssuer, _decode_AttCertIssuer, _encode_AttCertIssuer } from "../AttributeCertificateDefinitions/AttCertIssuer.ta.mjs";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import { CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";
// export { CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";
import { AttCertValidityPeriod, _decode_AttCertValidityPeriod, _encode_AttCertValidityPeriod } from "../AttributeCertificateDefinitions/AttCertValidityPeriod.ta.mjs";
// export { AttCertValidityPeriod, _decode_AttCertValidityPeriod, _encode_AttCertValidityPeriod } from "../AttributeCertificateDefinitions/AttCertValidityPeriod.ta.mjs";
import { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
// export { Attribute, _decode_Attribute, _encode_Attribute } from "../InformationFramework/Attribute.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../AuthenticationFramework/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../AuthenticationFramework/Extensions.ta.mjs";


/**
 * @summary TBSAttributeCertificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TBSAttributeCertificate ::= SEQUENCE {
 *   version                 AttCertVersion, -- version is v2
 *   holder                  Holder,
 *   issuer                  AttCertIssuer,
 *   signature               AlgorithmIdentifier{{SupportedAlgorithms}},
 *   serialNumber            CertificateSerialNumber,
 *   attrCertValidityPeriod  AttCertValidityPeriod,
 *   attributes              SEQUENCE OF Attribute{{SupportedAttributes}},
 *   issuerUniqueID          UniqueIdentifier OPTIONAL,
 *   ...,
 *   ...,
 *   extensions              Extensions OPTIONAL
 *  }  (CONSTRAINED BY { -- shall be DER encoded -- } )
 * ```
 * 
 * @class
 */
export
class TBSAttributeCertificate {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: AttCertVersion,
        /**
         * @summary `holder`.
         * @public
         * @readonly
         */
        readonly holder: Holder,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: AttCertIssuer,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: AlgorithmIdentifier,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary `attrCertValidityPeriod`.
         * @public
         * @readonly
         */
        readonly attrCertValidityPeriod: AttCertValidityPeriod,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: Attribute[],
        /**
         * @summary `issuerUniqueID`.
         * @public
         * @readonly
         */
        readonly issuerUniqueID: OPTIONAL<UniqueIdentifier>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>
    ) {}

    /**
     * @summary Restructures an object into a TBSAttributeCertificate
     * @description
     * 
     * This takes an `object` and converts it to a `TBSAttributeCertificate`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSAttributeCertificate`.
     * @returns {TBSAttributeCertificate}
     */
    public static _from_object (_o: { [_K in keyof (TBSAttributeCertificate)]: (TBSAttributeCertificate)[_K] }): TBSAttributeCertificate {
        return new TBSAttributeCertificate(_o.version, _o.holder, _o.issuer, _o.signature, _o.serialNumber, _o.attrCertValidityPeriod, _o.attributes, _o.issuerUniqueID, _o._unrecognizedExtensionsList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of TBSAttributeCertificate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TBSAttributeCertificate: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("holder", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("issuer", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("signature", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("serialNumber", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("attrCertValidityPeriod", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("attributes", false, $.hasTag(_TagClass.universal, 16)),
    /* FIXME: issuerUniqueID COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of TBSAttributeCertificate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TBSAttributeCertificate: $.ComponentSpec[] = [
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Extension Addition Component Types of TBSAttributeCertificate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TBSAttributeCertificate: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TBSAttributeCertificate: $.ASN1Decoder<TBSAttributeCertificate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TBSAttributeCertificate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TBSAttributeCertificate (el: _Element): TBSAttributeCertificate {
    if (!_cached_decoder_for_TBSAttributeCertificate) { _cached_decoder_for_TBSAttributeCertificate = function (el: _Element): TBSAttributeCertificate {
    let version!: AttCertVersion;
    let holder!: Holder;
    let issuer!: AttCertIssuer;
    let signature!: AlgorithmIdentifier;
    let serialNumber!: CertificateSerialNumber;
    let attrCertValidityPeriod!: AttCertValidityPeriod;
    let attributes!: Attribute[];
    let issuerUniqueID: OPTIONAL<UniqueIdentifier>;
    let _unrecognizedExtensionsList: _Element[] = [];
    let extensions: OPTIONAL<Extensions>;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = _decode_AttCertVersion(_el); },
        "holder": (_el: _Element): void => { holder = _decode_Holder(_el); },
        "issuer": (_el: _Element): void => { issuer = _decode_AttCertIssuer(_el); },
        "signature": (_el: _Element): void => { signature = _decode_AlgorithmIdentifier(_el); },
        "serialNumber": (_el: _Element): void => { serialNumber = _decode_CertificateSerialNumber(_el); },
        "attrCertValidityPeriod": (_el: _Element): void => { attrCertValidityPeriod = _decode_AttCertValidityPeriod(_el); },
        "attributes": (_el: _Element): void => { attributes = $._decodeSequenceOf<Attribute>(() => _decode_Attribute)(_el); },
        "issuerUniqueID": (_el: _Element): void => { issuerUniqueID = _decode_UniqueIdentifier(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_Extensions(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TBSAttributeCertificate,
        _extension_additions_list_spec_for_TBSAttributeCertificate,
        _root_component_type_list_2_spec_for_TBSAttributeCertificate,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TBSAttributeCertificate(
        version,
        holder,
        issuer,
        signature,
        serialNumber,
        attrCertValidityPeriod,
        attributes,
        issuerUniqueID,
        _unrecognizedExtensionsList,
        extensions
    );
}; }
    return _cached_decoder_for_TBSAttributeCertificate(el);
}

let _cached_encoder_for_TBSAttributeCertificate: $.ASN1Encoder<TBSAttributeCertificate> | null = null;

/**
 * @summary Encodes a(n) TBSAttributeCertificate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSAttributeCertificate, encoded as an ASN.1 Element.
 */
export
function _encode_TBSAttributeCertificate (value: TBSAttributeCertificate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TBSAttributeCertificate) { _cached_encoder_for_TBSAttributeCertificate = function (value: TBSAttributeCertificate, elGetter: $.ASN1Encoder<TBSAttributeCertificate>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AttCertVersion(value.version, $.BER),
            /* REQUIRED   */ _encode_Holder(value.holder, $.BER),
            /* REQUIRED   */ _encode_AttCertIssuer(value.issuer, $.BER),
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.signature, $.BER),
            /* REQUIRED   */ _encode_CertificateSerialNumber(value.serialNumber, $.BER),
            /* REQUIRED   */ _encode_AttCertValidityPeriod(value.attrCertValidityPeriod, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<Attribute>(() => _encode_Attribute, $.BER)(value.attributes, $.BER),
            /* IF_ABSENT  */ ((value.issuerUniqueID === undefined) ? undefined : _encode_UniqueIdentifier(value.issuerUniqueID, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
        [
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_Extensions(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TBSAttributeCertificate(value, elGetter);
}


/* eslint-enable */
