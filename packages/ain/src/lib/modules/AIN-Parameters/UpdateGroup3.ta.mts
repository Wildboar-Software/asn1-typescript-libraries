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
import { Service3, _enum_for_Service3, Service3_distinctiveRingingCallWaiting /* IMPORTED_LONG_ENUMERATION_ITEM */, distinctiveRingingCallWaiting /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service3_selectiveCallRejection /* IMPORTED_LONG_ENUMERATION_ITEM */, selectiveCallRejection /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Service3, _encode_Service3 } from "../AIN-Parameters/Service3.ta.mjs";
// export { Service3, _enum_for_Service3, Service3_distinctiveRingingCallWaiting /* IMPORTED_LONG_ENUMERATION_ITEM */, distinctiveRingingCallWaiting /* IMPORTED_SHORT_ENUMERATION_ITEM */, Service3_selectiveCallRejection /* IMPORTED_LONG_ENUMERATION_ITEM */, selectiveCallRejection /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Service3, _encode_Service3 } from "../AIN-Parameters/Service3.ta.mjs";
import { Action3, _decode_Action3, _encode_Action3 } from "../AIN-Parameters/Action3.ta.mjs";
// export { Action3, _decode_Action3, _encode_Action3 } from "../AIN-Parameters/Action3.ta.mjs";


/**
 * @summary UpdateGroup3
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UpdateGroup3 ::= SEQUENCE{
 *         service3 [1] IMPLICIT Service3,
 *         action3 Action3
 *     }
 * ```
 * 
 * @class
 */
export
class UpdateGroup3 {
    constructor (
        /**
         * @summary `service3`.
         * @public
         * @readonly
         */
        readonly service3: Service3,
        /**
         * @summary `action3`.
         * @public
         * @readonly
         */
        readonly action3: Action3
    ) {}

    /**
     * @summary Restructures an object into a UpdateGroup3
     * @description
     * 
     * This takes an `object` and converts it to a `UpdateGroup3`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UpdateGroup3`.
     * @returns {UpdateGroup3}
     */
    public static _from_object (_o: { [_K in keyof (UpdateGroup3)]: (UpdateGroup3)[_K] }): UpdateGroup3 {
        return new UpdateGroup3(_o.service3, _o.action3);
    }

        /**
         * @summary The enum used as the type of the component `service3`
         * @public
         * @static
         */

    public static _enum_for_service3 = _enum_for_Service3;
}

/**
 * @summary The Leading Root Component Types of UpdateGroup3
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UpdateGroup3: $.ComponentSpec[] = [
    new $.ComponentSpec("service3", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("action3", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of UpdateGroup3
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UpdateGroup3: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UpdateGroup3
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UpdateGroup3: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UpdateGroup3: $.ASN1Decoder<UpdateGroup3> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UpdateGroup3
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UpdateGroup3 (el: _Element): UpdateGroup3 {
    if (!_cached_decoder_for_UpdateGroup3) { _cached_decoder_for_UpdateGroup3 = function (el: _Element): UpdateGroup3 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("UpdateGroup3 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "service3";
    sequence[1].name = "action3";
    let service3!: Service3;
    let action3!: Action3;
    service3 = $._decode_implicit<Service3>(() => _decode_Service3)(sequence[0]);
    action3 = _decode_Action3(sequence[1]);
    return new UpdateGroup3(
        service3,
        action3,

    );
}; }
    return _cached_decoder_for_UpdateGroup3(el);
}

let _cached_encoder_for_UpdateGroup3: $.ASN1Encoder<UpdateGroup3> | null = null;

/**
 * @summary Encodes a(n) UpdateGroup3 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UpdateGroup3, encoded as an ASN.1 Element.
 */
export
function _encode_UpdateGroup3 (value: UpdateGroup3, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UpdateGroup3) { _cached_encoder_for_UpdateGroup3 = function (value: UpdateGroup3, elGetter: $.ASN1Encoder<UpdateGroup3>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_Service3, $.BER)(value.service3, $.BER),
            /* REQUIRED   */ _encode_Action3(value.action3, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UpdateGroup3(value, elGetter);
}


/* eslint-enable */
