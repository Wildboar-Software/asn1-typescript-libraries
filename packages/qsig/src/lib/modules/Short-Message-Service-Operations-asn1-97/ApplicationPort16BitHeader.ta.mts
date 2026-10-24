/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary ApplicationPort16BitHeader
 * @description
 *
 * Routes a Short Message to an application using 16-bit ports (ECMA-325
 * §E.1.3.1.5). Include this header in every segment of a concatenated Short
 * Message. The prose range is 0 to 65535: 0 to 15999 are IANA allocations,
 * 16000 to 16999 are for applications, and other values are reserved. The
 * ASN.1 constraint is 0..65536, which also allows 65536.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplicationPort16BitHeader ::= SEQUENCE {
 *     destination16BitPort INTEGER (0..65536),
 *     originator16BitPort INTEGER (0..65536)
 * }
 * ```
 * 
 * @class
 */
export
class ApplicationPort16BitHeader {
    /**
     * @summary `destination16BitPort`.
     * @description
     *
     * Receiving application. Prose: 0 to 65535, with 0-15999 IANA, 16000-16999
     * for applications, and the rest reserved (ECMA-325 §E.1.3.1.5). ASN.1
     * allows 0..65536.
     * @public
     * @readonly
     */
    readonly destination16BitPort: INTEGER;
    /**
     * @summary `originator16BitPort`.
     * @description
     *
     * Sending application. Same ranges as the destination port (ECMA-325
     * §E.1.3.1.5). The prose names this element `originating16BitPort`; the
     * ASN.1 name is `originator16BitPort`.
     * @public
     * @readonly
     */
    readonly originator16BitPort: INTEGER;

    constructor (
        destination16BitPort: INTEGER,
        originator16BitPort: INTEGER
    ) {
        this.destination16BitPort = destination16BitPort;
        this.originator16BitPort = originator16BitPort;
    
        if ((typeof destination16BitPort === "bigint" ? (destination16BitPort < 0n || destination16BitPort > 65536n) : (destination16BitPort < 0 || destination16BitPort > 65536))) {
            throw new ASN1OverflowError("ApplicationPort16BitHeader.destination16BitPort violates INTEGER constraint");
        }
        if ((typeof originator16BitPort === "bigint" ? (originator16BitPort < 0n || originator16BitPort > 65536n) : (originator16BitPort < 0 || originator16BitPort > 65536))) {
            throw new ASN1OverflowError("ApplicationPort16BitHeader.originator16BitPort violates INTEGER constraint");
        }
    }

    /**
     * @summary Restructures an object into a ApplicationPort16BitHeader
     * @description
     * 
     * This takes an `object` and converts it to a `ApplicationPort16BitHeader`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ApplicationPort16BitHeader`.
     * @returns {ApplicationPort16BitHeader}
     */
    public static _from_object (_o: { [_K in keyof (ApplicationPort16BitHeader)]: (ApplicationPort16BitHeader)[_K] }): ApplicationPort16BitHeader {
        return new ApplicationPort16BitHeader(_o.destination16BitPort, _o.originator16BitPort);
    }

}

/**
 * @summary The Leading Root Component Types of ApplicationPort16BitHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ApplicationPort16BitHeader: $.ComponentSpec[] = [
    new $.ComponentSpec("destination16BitPort", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("originator16BitPort", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of ApplicationPort16BitHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ApplicationPort16BitHeader: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ApplicationPort16BitHeader
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ApplicationPort16BitHeader: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ApplicationPort16BitHeader: $.ASN1Decoder<ApplicationPort16BitHeader> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationPort16BitHeader
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ApplicationPort16BitHeader (el: _Element): ApplicationPort16BitHeader {
    if (!_cached_decoder_for_ApplicationPort16BitHeader) { _cached_decoder_for_ApplicationPort16BitHeader = function (el: _Element): ApplicationPort16BitHeader {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ApplicationPort16BitHeader contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "destination16BitPort";
    sequence[1].name = "originator16BitPort";
    const destination16BitPort: INTEGER = $._decodeInteger(sequence[0]);
    const originator16BitPort: INTEGER = $._decodeInteger(sequence[1]);
    return new ApplicationPort16BitHeader(
        destination16BitPort,
        originator16BitPort,

    );
}; }
    return _cached_decoder_for_ApplicationPort16BitHeader(el);
}

let _cached_encoder_for_ApplicationPort16BitHeader: $.ASN1Encoder<ApplicationPort16BitHeader> | null = null;

/**
 * @summary Encodes a(n) ApplicationPort16BitHeader into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationPort16BitHeader, encoded as an ASN.1 Element.
 */
export
function _encode_ApplicationPort16BitHeader (value: ApplicationPort16BitHeader, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ApplicationPort16BitHeader) { _cached_encoder_for_ApplicationPort16BitHeader = function (value: ApplicationPort16BitHeader, _elGetter: $.ASN1Encoder<ApplicationPort16BitHeader>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encodeInteger(value.destination16BitPort, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.originator16BitPort, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ApplicationPort16BitHeader(value, elGetter);
}

/* eslint-enable */
