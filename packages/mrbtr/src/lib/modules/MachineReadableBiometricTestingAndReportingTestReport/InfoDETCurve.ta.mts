/* eslint-disable */
import {
    INTEGER,
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
import { ExpressionDETCurve, _decode_ExpressionDETCurve, _encode_ExpressionDETCurve } from "../MachineReadableBiometricTestingAndReportingTestReport/ExpressionDETCurve.ta.mjs";


/**
 * @summary InfoDETCurve
 * @description
 *
 * DET characteristic: sample counts for Type I and Type II estimates
 * plus tabulated points (Clause 6.4.4.3.3, Annex B.12). Points shall
 * appear in increasing `typeIError` order.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InfoDETCurve ::= SEQUENCE {
 *     numOfSamplesEstTypeIError   INTEGER,
 *     numOfSamplesEstTypeIIError  INTEGER,
 *     expressionDETCurve          ExpressionDETCurve
 * }
 * ```
 * 
 * @class
 */
export
class InfoDETCurve {
    constructor (
        /**
         * @summary `numOfSamplesEstTypeIError`.
         * @description
         *
         * Comparisons or transactions used to estimate the Type I error
         * (Clause 6.4.4.3.3, Annex B.12).
         *
         * @public
         * @readonly
         */
        readonly numOfSamplesEstTypeIError: INTEGER,
        /**
         * @summary `numOfSamplesEstTypeIIError`.
         * @description
         *
         * Comparisons or transactions used to estimate the Type II error
         * (Clause 6.4.4.3.3, Annex B.12).
         *
         * @public
         * @readonly
         */
        readonly numOfSamplesEstTypeIIError: INTEGER,
        /**
         * @summary `expressionDETCurve`.
         * @description
         *
         * DET points in increasing Type I error order
         * (Clause 6.4.4.3.3).
         *
         * @public
         * @readonly
         */
        readonly expressionDETCurve: ExpressionDETCurve
    ) {}

    /**
     * @summary Restructures an object into a InfoDETCurve
     * @description
     * 
     * This takes an `object` and converts it to a `InfoDETCurve`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InfoDETCurve`.
     * @returns {InfoDETCurve}
     */
    public static _from_object (_o: { [_K in keyof (InfoDETCurve)]: (InfoDETCurve)[_K] }): InfoDETCurve {
        return new InfoDETCurve(_o.numOfSamplesEstTypeIError, _o.numOfSamplesEstTypeIIError, _o.expressionDETCurve);
    }


}

/**
 * @summary The Leading Root Component Types of InfoDETCurve
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InfoDETCurve: $.ComponentSpec[] = [
    new $.ComponentSpec("numOfSamplesEstTypeIError", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("numOfSamplesEstTypeIIError", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("expressionDETCurve", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of InfoDETCurve
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InfoDETCurve: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InfoDETCurve
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InfoDETCurve: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InfoDETCurve: $.ASN1Decoder<InfoDETCurve> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InfoDETCurve
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InfoDETCurve (el: _Element): InfoDETCurve {
    if (!_cached_decoder_for_InfoDETCurve) { _cached_decoder_for_InfoDETCurve = function (el: _Element): InfoDETCurve {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("InfoDETCurve contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "numOfSamplesEstTypeIError";
    sequence[1].name = "numOfSamplesEstTypeIIError";
    sequence[2].name = "expressionDETCurve";
    let numOfSamplesEstTypeIError!: INTEGER;
    let numOfSamplesEstTypeIIError!: INTEGER;
    let expressionDETCurve!: ExpressionDETCurve;
    numOfSamplesEstTypeIError = $._decodeInteger(sequence[0]);
    numOfSamplesEstTypeIIError = $._decodeInteger(sequence[1]);
    expressionDETCurve = _decode_ExpressionDETCurve(sequence[2]);
    return new InfoDETCurve(
        numOfSamplesEstTypeIError,
        numOfSamplesEstTypeIIError,
        expressionDETCurve,

    );
}; }
    return _cached_decoder_for_InfoDETCurve(el);
}

let _cached_encoder_for_InfoDETCurve: $.ASN1Encoder<InfoDETCurve> | null = null;

/**
 * @summary Encodes a(n) InfoDETCurve into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InfoDETCurve, encoded as an ASN.1 Element.
 */
export
function _encode_InfoDETCurve (value: InfoDETCurve, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InfoDETCurve) { _cached_encoder_for_InfoDETCurve = function (value: InfoDETCurve): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.numOfSamplesEstTypeIError, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.numOfSamplesEstTypeIIError, $.BER),
            /* REQUIRED  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ExpressionDETCurve, $.BER)(value.expressionDETCurve, $.BER),
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_InfoDETCurve(value, elGetter);
}


/* eslint-enable */
