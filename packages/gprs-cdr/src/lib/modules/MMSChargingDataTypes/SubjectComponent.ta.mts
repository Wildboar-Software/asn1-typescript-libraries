/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubjectComponent
 * @description
 * 
 * Subject component carried with the MM component list. TS 32.270 does not
 * define `subjectType` or `subjectSize`.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubjectComponent ::= SEQUENCE {
 *    subjectType   [0] IMPLICIT OCTET STRING,
 *    subjectSize   [1] IMPLICIT INTEGER}
 * ```
 * 
 * @class
 */
export
class SubjectComponent {
    /**
     * @summary `subjectType`.
     * @description
     *
     * Type of the subject component. TS 32.270 does not define it.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly subjectType: OCTET_STRING;
    /**
     * @summary `subjectSize`.
     * @description
     *
     * Size of the subject component. TS 32.270 does not define it.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly subjectSize: INTEGER;

    constructor (
        subjectType: OCTET_STRING,
        subjectSize: INTEGER
    ) {
        this.subjectType = subjectType;
        this.subjectSize = subjectSize;
    }

    /**
     * @summary Restructures an object into a SubjectComponent
     * @description
     * 
     * This takes an `object` and converts it to a `SubjectComponent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubjectComponent`.
     * @returns {SubjectComponent}
     */
    public static _from_object (_o: { [_K in keyof (SubjectComponent)]: (SubjectComponent)[_K] }): SubjectComponent {
        return new SubjectComponent(_o.subjectType, _o.subjectSize);
    }


}

/**
 * @summary The Leading Root Component Types of SubjectComponent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SubjectComponent: $.ComponentSpec[] = [
    new $.ComponentSpec("subjectType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("subjectSize", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of SubjectComponent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SubjectComponent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SubjectComponent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SubjectComponent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SubjectComponent: $.ASN1Decoder<SubjectComponent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubjectComponent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubjectComponent (el: _Element): SubjectComponent {
    if (!_cached_decoder_for_SubjectComponent) { _cached_decoder_for_SubjectComponent = function (el: _Element): SubjectComponent {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SubjectComponent contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "subjectType";
    sequence[1].name = "subjectSize";
    const subjectType: OCTET_STRING = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    const subjectSize: INTEGER = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    return new SubjectComponent(
        subjectType,
        subjectSize,

    );
}; }
    return _cached_decoder_for_SubjectComponent(el);
}

let _cached_encoder_for_SubjectComponent: $.ASN1Encoder<SubjectComponent> | null = null;

/**
 * @summary Encodes a(n) SubjectComponent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectComponent, encoded as an ASN.1 Element.
 */
export
function _encode_SubjectComponent (value: SubjectComponent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubjectComponent) { _cached_encoder_for_SubjectComponent = function (value: SubjectComponent, _elGetter: $.ASN1Encoder<SubjectComponent>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.subjectType, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.subjectSize, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_SubjectComponent(value, elGetter);
}


/* eslint-enable */
