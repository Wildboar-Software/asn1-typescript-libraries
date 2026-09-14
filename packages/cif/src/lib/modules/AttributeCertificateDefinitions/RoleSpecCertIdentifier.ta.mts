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
import { GeneralName, _decode_GeneralName, _encode_GeneralName } from "../CertificateExtensions/GeneralName.ta.mjs";
// export { GeneralName, _decode_GeneralName, _encode_GeneralName } from "../CertificateExtensions/GeneralName.ta.mjs";
import { CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";
// export { CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";
import { GeneralNames, _decode_GeneralNames, _encode_GeneralNames } from "../CertificateExtensions/GeneralNames.ta.mjs";
// export { GeneralNames, _decode_GeneralNames, _encode_GeneralNames } from "../CertificateExtensions/GeneralNames.ta.mjs";


/**
 * @summary RoleSpecCertIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoleSpecCertIdentifier ::= SEQUENCE {
 *   roleName              [0]  GeneralName,
 *   roleCertIssuer        [1]  GeneralName,
 *   roleCertSerialNumber  [2]  CertificateSerialNumber OPTIONAL,
 *   roleCertLocator       [3]  GeneralNames OPTIONAL,
 *   ... }
 * ```
 * 
 * @class
 */
export
class RoleSpecCertIdentifier {
    constructor (
        /**
         * @summary `roleName`.
         * @public
         * @readonly
         */
        readonly roleName: GeneralName,
        /**
         * @summary `roleCertIssuer`.
         * @public
         * @readonly
         */
        readonly roleCertIssuer: GeneralName,
        /**
         * @summary `roleCertSerialNumber`.
         * @public
         * @readonly
         */
        readonly roleCertSerialNumber: OPTIONAL<CertificateSerialNumber>,
        /**
         * @summary `roleCertLocator`.
         * @public
         * @readonly
         */
        readonly roleCertLocator: OPTIONAL<GeneralNames>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RoleSpecCertIdentifier
     * @description
     * 
     * This takes an `object` and converts it to a `RoleSpecCertIdentifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RoleSpecCertIdentifier`.
     * @returns {RoleSpecCertIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (RoleSpecCertIdentifier)]: (RoleSpecCertIdentifier)[_K] }): RoleSpecCertIdentifier {
        return new RoleSpecCertIdentifier(_o.roleName, _o.roleCertIssuer, _o.roleCertSerialNumber, _o.roleCertLocator, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RoleSpecCertIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RoleSpecCertIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("roleName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("roleCertIssuer", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("roleCertSerialNumber", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("roleCertLocator", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of RoleSpecCertIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RoleSpecCertIdentifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RoleSpecCertIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RoleSpecCertIdentifier: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RoleSpecCertIdentifier: $.ASN1Decoder<RoleSpecCertIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoleSpecCertIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoleSpecCertIdentifier (el: _Element): RoleSpecCertIdentifier {
    if (!_cached_decoder_for_RoleSpecCertIdentifier) { _cached_decoder_for_RoleSpecCertIdentifier = function (el: _Element): RoleSpecCertIdentifier {
    let roleName!: GeneralName;
    let roleCertIssuer!: GeneralName;
    let roleCertSerialNumber: OPTIONAL<CertificateSerialNumber>;
    let roleCertLocator: OPTIONAL<GeneralNames>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "roleName": (_el: _Element): void => { roleName = $._decode_explicit<GeneralName>(() => _decode_GeneralName)(_el); },
        "roleCertIssuer": (_el: _Element): void => { roleCertIssuer = $._decode_explicit<GeneralName>(() => _decode_GeneralName)(_el); },
        "roleCertSerialNumber": (_el: _Element): void => { roleCertSerialNumber = $._decode_implicit<CertificateSerialNumber>(() => _decode_CertificateSerialNumber)(_el); },
        "roleCertLocator": (_el: _Element): void => { roleCertLocator = $._decode_implicit<GeneralNames>(() => _decode_GeneralNames)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RoleSpecCertIdentifier,
        _extension_additions_list_spec_for_RoleSpecCertIdentifier,
        _root_component_type_list_2_spec_for_RoleSpecCertIdentifier,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RoleSpecCertIdentifier(
        roleName,
        roleCertIssuer,
        roleCertSerialNumber,
        roleCertLocator,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RoleSpecCertIdentifier(el);
}

let _cached_encoder_for_RoleSpecCertIdentifier: $.ASN1Encoder<RoleSpecCertIdentifier> | null = null;

/**
 * @summary Encodes a(n) RoleSpecCertIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoleSpecCertIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_RoleSpecCertIdentifier (value: RoleSpecCertIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoleSpecCertIdentifier) { _cached_encoder_for_RoleSpecCertIdentifier = function (value: RoleSpecCertIdentifier, elGetter: $.ASN1Encoder<RoleSpecCertIdentifier>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_GeneralName, $.BER)(value.roleName, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_GeneralName, $.BER)(value.roleCertIssuer, $.BER),
            /* IF_ABSENT  */ ((value.roleCertSerialNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CertificateSerialNumber, $.BER)(value.roleCertSerialNumber, $.BER)),
            /* IF_ABSENT  */ ((value.roleCertLocator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_GeneralNames, $.BER)(value.roleCertLocator, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RoleSpecCertIdentifier(value, elGetter);
}


/* eslint-enable */
