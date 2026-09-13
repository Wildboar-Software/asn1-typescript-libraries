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
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";


/**
 * @summary AdministerPasswordArgumentData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdministerPasswordArgumentData ::= SEQUENCE {
 *   object  [0]  DistinguishedName,
 *   newPwd  [1]  UserPwd,
 *   ... }
 * ```
 * 
 * @class
 */
export
class AdministerPasswordArgumentData {
    constructor (
        /**
         * @summary `object`.
         * @public
         * @readonly
         */
        readonly object: DistinguishedName,
        /**
         * @summary `newPwd`.
         * @public
         * @readonly
         */
        readonly newPwd: UserPwd,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AdministerPasswordArgumentData
     * @description
     * 
     * This takes an `object` and converts it to a `AdministerPasswordArgumentData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AdministerPasswordArgumentData`.
     * @returns {AdministerPasswordArgumentData}
     */
    public static _from_object (_o: { [_K in keyof (AdministerPasswordArgumentData)]: (AdministerPasswordArgumentData)[_K] }): AdministerPasswordArgumentData {
        return new AdministerPasswordArgumentData(_o.object, _o.newPwd, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AdministerPasswordArgumentData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AdministerPasswordArgumentData: $.ComponentSpec[] = [
    new $.ComponentSpec("object", false, $.hasTag(_TagClass.context, 0)),
    /* FIXME: newPwd COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of AdministerPasswordArgumentData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AdministerPasswordArgumentData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AdministerPasswordArgumentData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AdministerPasswordArgumentData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AdministerPasswordArgumentData: $.ASN1Decoder<AdministerPasswordArgumentData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdministerPasswordArgumentData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdministerPasswordArgumentData (el: _Element): AdministerPasswordArgumentData {
    if (!_cached_decoder_for_AdministerPasswordArgumentData) { _cached_decoder_for_AdministerPasswordArgumentData = function (el: _Element): AdministerPasswordArgumentData {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AdministerPasswordArgumentData contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "object";
    sequence[1].name = "newPwd";
    let object!: DistinguishedName;
    let newPwd!: UserPwd;
    object = $._decode_explicit<DistinguishedName>(() => _decode_DistinguishedName)(sequence[0]);
    newPwd = $._decode_explicit<UserPwd>(() => _decode_UserPwd)(sequence[1]);
    return new AdministerPasswordArgumentData(
        object,
        newPwd,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_AdministerPasswordArgumentData(el);
}

let _cached_encoder_for_AdministerPasswordArgumentData: $.ASN1Encoder<AdministerPasswordArgumentData> | null = null;

/**
 * @summary Encodes a(n) AdministerPasswordArgumentData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdministerPasswordArgumentData, encoded as an ASN.1 Element.
 */
export
function _encode_AdministerPasswordArgumentData (value: AdministerPasswordArgumentData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdministerPasswordArgumentData) { _cached_encoder_for_AdministerPasswordArgumentData = function (value: AdministerPasswordArgumentData, elGetter: $.ASN1Encoder<AdministerPasswordArgumentData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_DistinguishedName, $.BER)(value.object, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_UserPwd, $.BER)(value.newPwd, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AdministerPasswordArgumentData(value, elGetter);
}


/* eslint-enable */
