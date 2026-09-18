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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { CONTENT_TYPE } from "../CryptographicMessageSyntax-2009/CONTENT-TYPE.oca.mjs";
// export { ContentTypeBiometricTestReport } from "../MachineReadableBiometricTestingAndReportingTestReport/ContentTypeBiometricTestReport.osa.mjs";


/**
 * @summary BiometricTestReport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricTestReport ::= SEQUENCE {
 *     contentType CONTENT-TYPE.&id({ContentTypeBiometricTestReport}),
 *     content     [0] EXPLICIT CONTENT-TYPE.&Type
 *         ({ContentTypeBiometricTestReport}{@contentType})
 * }
 * ```
 * 
 * @class
 */
export
class BiometricTestReport {
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
     * @summary Restructures an object into a BiometricTestReport
     * @description
     * 
     * This takes an `object` and converts it to a `BiometricTestReport`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BiometricTestReport`.
     * @returns {BiometricTestReport}
     */
    public static _from_object (_o: { [_K in keyof (BiometricTestReport)]: (BiometricTestReport)[_K] }): BiometricTestReport {
        return new BiometricTestReport(_o.contentType, _o.content);
    }


}

/**
 * @summary The Leading Root Component Types of BiometricTestReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BiometricTestReport: $.ComponentSpec[] = [
    new $.ComponentSpec("contentType", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("content", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of BiometricTestReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BiometricTestReport: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BiometricTestReport
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BiometricTestReport: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BiometricTestReport: $.ASN1Decoder<BiometricTestReport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricTestReport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BiometricTestReport (el: _Element): BiometricTestReport {
    if (!_cached_decoder_for_BiometricTestReport) { _cached_decoder_for_BiometricTestReport = function (el: _Element): BiometricTestReport {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("BiometricTestReport contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "contentType";
    sequence[1].name = "content";
    let contentType!: OBJECT_IDENTIFIER;
    let content!: _Element;
    contentType = $._decodeObjectIdentifier(sequence[0]);
    content = $._decode_explicit<_Element>(() => $._decodeAny)(sequence[1]);
    return new BiometricTestReport(
        contentType,
        content,

    );
}; }
    return _cached_decoder_for_BiometricTestReport(el);
}

let _cached_encoder_for_BiometricTestReport: $.ASN1Encoder<BiometricTestReport> | null = null;

/**
 * @summary Encodes a(n) BiometricTestReport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricTestReport, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricTestReport (value: BiometricTestReport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BiometricTestReport) { _cached_encoder_for_BiometricTestReport = function (value: BiometricTestReport): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.contentType, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeAny, $.BER)(value.content, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BiometricTestReport(value, elGetter);
}


/* eslint-enable */
