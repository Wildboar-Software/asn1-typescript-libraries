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
 * @summary ChangePasswordArgumentData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChangePasswordArgumentData ::= SEQUENCE {
 *   object   [0]  DistinguishedName,
 *   oldPwd   [1]  UserPwd,
 *   newPwd   [2]  UserPwd,
 *   ... }
 * ```
 * 
 * @class
 */
export
class ChangePasswordArgumentData {
    constructor (
        /**
         * @summary `object`.
         * @public
         * @readonly
         */
        readonly object: DistinguishedName,
        /**
         * @summary `oldPwd`.
         * @public
         * @readonly
         */
        readonly oldPwd: UserPwd,
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
     * @summary Restructures an object into a ChangePasswordArgumentData
     * @description
     * 
     * This takes an `object` and converts it to a `ChangePasswordArgumentData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChangePasswordArgumentData`.
     * @returns {ChangePasswordArgumentData}
     */
    public static _from_object (_o: { [_K in keyof (ChangePasswordArgumentData)]: (ChangePasswordArgumentData)[_K] }): ChangePasswordArgumentData {
        return new ChangePasswordArgumentData(_o.object, _o.oldPwd, _o.newPwd, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ChangePasswordArgumentData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChangePasswordArgumentData: $.ComponentSpec[] = [
    new $.ComponentSpec("object", false, $.hasTag(_TagClass.context, 0)),
    /* FIXME: oldPwd COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: newPwd COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of ChangePasswordArgumentData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChangePasswordArgumentData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChangePasswordArgumentData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChangePasswordArgumentData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChangePasswordArgumentData: $.ASN1Decoder<ChangePasswordArgumentData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChangePasswordArgumentData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChangePasswordArgumentData (el: _Element): ChangePasswordArgumentData {
    if (!_cached_decoder_for_ChangePasswordArgumentData) { _cached_decoder_for_ChangePasswordArgumentData = function (el: _Element): ChangePasswordArgumentData {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("ChangePasswordArgumentData contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "object";
    sequence[1].name = "oldPwd";
    sequence[2].name = "newPwd";
    let object!: DistinguishedName;
    let oldPwd!: UserPwd;
    let newPwd!: UserPwd;
    object = $._decode_explicit<DistinguishedName>(() => _decode_DistinguishedName)(sequence[0]);
    oldPwd = $._decode_explicit<UserPwd>(() => _decode_UserPwd)(sequence[1]);
    newPwd = $._decode_explicit<UserPwd>(() => _decode_UserPwd)(sequence[2]);
    return new ChangePasswordArgumentData(
        object,
        oldPwd,
        newPwd,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_ChangePasswordArgumentData(el);
}

let _cached_encoder_for_ChangePasswordArgumentData: $.ASN1Encoder<ChangePasswordArgumentData> | null = null;

/**
 * @summary Encodes a(n) ChangePasswordArgumentData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChangePasswordArgumentData, encoded as an ASN.1 Element.
 */
export
function _encode_ChangePasswordArgumentData (value: ChangePasswordArgumentData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChangePasswordArgumentData) { _cached_encoder_for_ChangePasswordArgumentData = function (value: ChangePasswordArgumentData, elGetter: $.ASN1Encoder<ChangePasswordArgumentData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_DistinguishedName, $.BER)(value.object, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_UserPwd, $.BER)(value.oldPwd, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_UserPwd, $.BER)(value.newPwd, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChangePasswordArgumentData(value, elGetter);
}


/* eslint-enable */
