/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

/**
 * @summary BPUReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BPUReport ::= SEQUENCE {
 *   contentType  CONTENT-TYPE.&id({ContentTypeBPUReport}),
 *   content
 *     [0] EXPLICIT CONTENT-TYPE.&Type({ContentTypeBPUReport}{@contentType})
 * }
 * ```
 * 
 * @class
 */
export
class BPUReport {
    constructor (
        /**
         * @summary `contentType`.
         * @public
         * @readonly
         */
        readonly contentType: OBJECT_IDENTIFIER,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: _Element
    ) {}

    /**
     * @summary Restructures an object into a BPUReport
     * @description
     * 
     * This takes an `object` and converts it to a `BPUReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BPUReport`.
     * @returns {BPUReport}
     */
    public static _from_object (_o: { [_K in keyof (BPUReport)]: (BPUReport)[_K] }): BPUReport {
        return new BPUReport(_o.contentType, _o.content);
    }


}

/**
 * @summary The Leading Root Component Types of BPUReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BPUReport: $.ComponentSpec[] = [
    new $.ComponentSpec("contentType", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("content", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of BPUReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BPUReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BPUReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BPUReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BPUReport: $.ASN1Decoder<BPUReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BPUReport
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BPUReport} The decoded data structure.
 */
export
function _decode_BPUReport (el: _Element) {
    if (!_cached_decoder_for_BPUReport) { _cached_decoder_for_BPUReport = function (el: _Element): BPUReport {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("BPUReport contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "contentType";
    sequence[1].name = "content";
    let contentType!: OBJECT_IDENTIFIER;
    let content!: _Element;
    contentType = $._decodeObjectIdentifier(sequence[0]);
    content = $._decode_explicit<_Element>(() => $._decodeAny)(sequence[1]);
    return new BPUReport(
        contentType,
        content,

    );
}; }
    return _cached_decoder_for_BPUReport(el);
}

let _cached_encoder_for_BPUReport: $.ASN1Encoder<BPUReport> | null = null;

/**
 * @summary Encodes a(n) BPUReport into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BPUReport, encoded as an ASN.1 Element.
 */
export
function _encode_BPUReport (value: BPUReport, elGetter: $.ASN1Encoder<BPUReport>) {
    if (!_cached_encoder_for_BPUReport) { _cached_encoder_for_BPUReport = function (value: BPUReport): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.contentType, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeAny, $.BER)(value.content, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BPUReport(value, elGetter);
}


/* eslint-enable */
