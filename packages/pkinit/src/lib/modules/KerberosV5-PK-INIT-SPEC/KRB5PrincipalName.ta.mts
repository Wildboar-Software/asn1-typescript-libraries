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
import { Realm, _decode_Realm, _encode_Realm } from "../KerberosV5Spec2/Realm.ta.mjs";
// export { Realm, _decode_Realm, _encode_Realm } from "../KerberosV5Spec2/Realm.ta.mjs";
import { PrincipalName, _decode_PrincipalName, _encode_PrincipalName } from "../KerberosV5Spec2/PrincipalName.ta.mjs";
// export { PrincipalName, _decode_PrincipalName, _encode_PrincipalName } from "../KerberosV5Spec2/PrincipalName.ta.mjs";


/**
 * @summary KRB5PrincipalName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KRB5PrincipalName ::= SEQUENCE {
 *     realm                   [0] Realm,
 *     principalName           [1] PrincipalName
 * }
 * ```
 * 
 * @class
 */
export
class KRB5PrincipalName {
    constructor (
        /**
         * @summary `realm`.
         * @public
         * @readonly
         */
        readonly realm: Realm,
        /**
         * @summary `principalName`.
         * @public
         * @readonly
         */
        readonly principalName: PrincipalName
    ) {}

    /**
     * @summary Restructures an object into a KRB5PrincipalName
     * @description
     * 
     * This takes an `object` and converts it to a `KRB5PrincipalName`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KRB5PrincipalName`.
     * @returns {KRB5PrincipalName}
     */
    public static _from_object (_o: { [_K in keyof (KRB5PrincipalName)]: (KRB5PrincipalName)[_K] }): KRB5PrincipalName {
        return new KRB5PrincipalName(_o.realm, _o.principalName);
    }


}

/**
 * @summary The Leading Root Component Types of KRB5PrincipalName
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_KRB5PrincipalName: $.ComponentSpec[] = [
    new $.ComponentSpec("realm", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("principalName", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of KRB5PrincipalName
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_KRB5PrincipalName: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of KRB5PrincipalName
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_KRB5PrincipalName: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_KRB5PrincipalName: $.ASN1Decoder<KRB5PrincipalName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KRB5PrincipalName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KRB5PrincipalName (el: _Element): KRB5PrincipalName {
    if (!_cached_decoder_for_KRB5PrincipalName) { _cached_decoder_for_KRB5PrincipalName = function (el: _Element): KRB5PrincipalName {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("KRB5PrincipalName contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "realm";
    sequence[1].name = "principalName";
    let realm!: Realm;
    let principalName!: PrincipalName;
    realm = $._decode_explicit<Realm>(() => _decode_Realm)(sequence[0]);
    principalName = $._decode_explicit<PrincipalName>(() => _decode_PrincipalName)(sequence[1]);
    return new KRB5PrincipalName(
        realm,
        principalName,

    );
}; }
    return _cached_decoder_for_KRB5PrincipalName(el);
}

let _cached_encoder_for_KRB5PrincipalName: $.ASN1Encoder<KRB5PrincipalName> | null = null;

/**
 * @summary Encodes a(n) KRB5PrincipalName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KRB5PrincipalName, encoded as an ASN.1 Element.
 */
export
function _encode_KRB5PrincipalName (value: KRB5PrincipalName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KRB5PrincipalName) { _cached_encoder_for_KRB5PrincipalName = function (value: KRB5PrincipalName, elGetter: $.ASN1Encoder<KRB5PrincipalName>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Realm, $.BER)(value.realm, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_PrincipalName, $.BER)(value.principalName, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_KRB5PrincipalName(value, elGetter);
}


/* eslint-enable */
