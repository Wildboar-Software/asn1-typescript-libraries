/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SessionAMBR
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SessionAMBR ::= SEQUENCE {
 *    ambrUL     [1] IMPLICIT OCTET STRING,
 *    ambrDL     [2] IMPLICIT OCTET STRING}
 * ```
 * 
 * @class
 */
export
class SessionAMBR {
    /**
     * @summary `ambrUL`.
     * @public
     * @readonly
     */
    readonly ambrUL: OCTET_STRING;
    /**
     * @summary `ambrDL`.
     * @public
     * @readonly
     */
    readonly ambrDL: OCTET_STRING;

    constructor (
        ambrUL: OCTET_STRING,
        ambrDL: OCTET_STRING
    ) {
        this.ambrUL = ambrUL;
        this.ambrDL = ambrDL;
    }

    /**
     * @summary Restructures an object into a SessionAMBR
     * @description
     * 
     * This takes an `object` and converts it to a `SessionAMBR`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SessionAMBR`.
     * @returns {SessionAMBR}
     */
    public static _from_object (_o: { [_K in keyof (SessionAMBR)]: (SessionAMBR)[_K] }): SessionAMBR {
        return new SessionAMBR(_o.ambrUL, _o.ambrDL);
    }


}

/**
 * @summary The Leading Root Component Types of SessionAMBR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SessionAMBR: $.ComponentSpec[] = [
    new $.ComponentSpec("ambrUL", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ambrDL", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SessionAMBR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SessionAMBR: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SessionAMBR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SessionAMBR: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SessionAMBR: $.ASN1Decoder<SessionAMBR> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SessionAMBR
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SessionAMBR (el: _Element): SessionAMBR {
    if (!_cached_decoder_for_SessionAMBR) { _cached_decoder_for_SessionAMBR = function (el: _Element): SessionAMBR {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SessionAMBR contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ambrUL";
    sequence[1].name = "ambrDL";
    let ambrUL!: OCTET_STRING;
    let ambrDL!: OCTET_STRING;
    ambrUL = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    ambrDL = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new SessionAMBR(
        ambrUL,
        ambrDL,

    );
}; }
    return _cached_decoder_for_SessionAMBR(el);
}

let _cached_encoder_for_SessionAMBR: $.ASN1Encoder<SessionAMBR> | null = null;

/**
 * @summary Encodes a(n) SessionAMBR into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SessionAMBR, encoded as an ASN.1 Element.
 */
export
function _encode_SessionAMBR (value: SessionAMBR, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SessionAMBR) { _cached_encoder_for_SessionAMBR = function (value: SessionAMBR, _elGetter: $.ASN1Encoder<SessionAMBR>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.ambrUL, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.ambrDL, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_SessionAMBR(value, elGetter);
}


/* eslint-enable */
