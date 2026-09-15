/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    INTEGER,
    SEQUENCE,
    SET,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";



/**
 * @summary DigitsReportingCriteria
 * @description
 *
 * When to send Data Collected for digits: count, flush character, and/or
 * timeout (ECMA-269 §25.1.5.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DigitsReportingCriteria ::= SEQUENCE
 * {    numChars            [0] IMPLICIT INTEGER             OPTIONAL,
 *     flushChar            IA5String (SIZE(1..1))            OPTIONAL,
 *     timeout                [1] IMPLICIT INTEGER             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DigitsReportingCriteria {
    constructor (
        /**
         * @summary `numChars`.
         * @description
         *
         * Send Data Collected after this many characters (ECMA-269 §25.1.5.1).
         *
         * @public
         * @readonly
         */
        readonly numChars: OPTIONAL<INTEGER>,
        /**
         * @summary `flushChar`.
         * @description
         *
         * IA5 flush character that reports collected digits (ECMA-269
         * §25.1.5.1).
         *
         * @public
         * @readonly
         */
        readonly flushChar: OPTIONAL<IA5String>,
        /**
         * @summary `timeout`.
         * @description
         *
         * Timeout that reports collected digits (ECMA-269 §25.1.5.1).
         *
         * @public
         * @readonly
         */
        readonly timeout: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a DigitsReportingCriteria
     * @description
     * 
     * This takes an `object` and converts it to a `DigitsReportingCriteria`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DigitsReportingCriteria`.
     * @returns {DigitsReportingCriteria}
     */
    public static _from_object (_o: { [_K in keyof (DigitsReportingCriteria)]: (DigitsReportingCriteria)[_K] }): DigitsReportingCriteria {
        return new DigitsReportingCriteria(_o.numChars, _o.flushChar, _o.timeout);
    }


}

/**
 * @summary The Leading Root Component Types of DigitsReportingCriteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DigitsReportingCriteria: $.ComponentSpec[] = [
    new $.ComponentSpec("numChars", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("flushChar", true, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("timeout", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of DigitsReportingCriteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DigitsReportingCriteria: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DigitsReportingCriteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DigitsReportingCriteria: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DigitsReportingCriteria: $.ASN1Decoder<DigitsReportingCriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DigitsReportingCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DigitsReportingCriteria (el: _Element): DigitsReportingCriteria {
    if (!_cached_decoder_for_DigitsReportingCriteria) { _cached_decoder_for_DigitsReportingCriteria = function (el: _Element): DigitsReportingCriteria {
    let numChars: OPTIONAL<INTEGER>;
    let flushChar: OPTIONAL<IA5String>;
    let timeout: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "numChars": (_el: _Element): void => { numChars = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "flushChar": (_el: _Element): void => { flushChar = $._decodeIA5String(_el); },
        "timeout": (_el: _Element): void => { timeout = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DigitsReportingCriteria,
        _extension_additions_list_spec_for_DigitsReportingCriteria,
        _root_component_type_list_2_spec_for_DigitsReportingCriteria,
        undefined,
    );
    return new DigitsReportingCriteria(
        numChars,
        flushChar,
        timeout
    );
}; }
    return _cached_decoder_for_DigitsReportingCriteria(el);
}

let _cached_encoder_for_DigitsReportingCriteria: $.ASN1Encoder<DigitsReportingCriteria> | null = null;

/**
 * @summary Encodes a(n) DigitsReportingCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigitsReportingCriteria, encoded as an ASN.1 Element.
 */
export
function _encode_DigitsReportingCriteria (value: DigitsReportingCriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DigitsReportingCriteria) { _cached_encoder_for_DigitsReportingCriteria = function (value: DigitsReportingCriteria, elGetter: $.ASN1Encoder<DigitsReportingCriteria>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.numChars === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.numChars, $.BER)),
            /* IF_ABSENT  */ ((value.flushChar === undefined) ? undefined : $._encodeIA5String(value.flushChar, $.BER)),
            /* IF_ABSENT  */ ((value.timeout === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.timeout, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DigitsReportingCriteria(value, elGetter);
}


/* eslint-enable */
