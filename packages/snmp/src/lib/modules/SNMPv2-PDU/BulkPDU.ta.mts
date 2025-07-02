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
import {
    VarBindList,
    _decode_VarBindList,
    _encode_VarBindList,
} from "./VarBindList.ta.mjs";

/**
 * @summary BulkPDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BulkPDU ::= -- must be identical in
 *     SEQUENCE {                      -- structure to PDU
 *         request-id              INTEGER (-214783648..214783647),
 *         non-repeaters           INTEGER (0..max-bindings),
 *         max-repetitions         INTEGER (0..max-bindings),
 *         variable-bindings       VarBindList
 *     }
 * ```
 *
 */
export
class BulkPDU {
    constructor (
        /**
         * @summary `request_id`.
         * @public
         * @readonly
         */
        readonly request_id: INTEGER,
        /**
         * @summary `non_repeaters`.
         * @public
         * @readonly
         */
        readonly non_repeaters: INTEGER,
        /**
         * @summary `max_repetitions`.
         * @public
         * @readonly
         */
        readonly max_repetitions: INTEGER,
        /**
         * @summary `variable_bindings`.
         * @public
         * @readonly
         */
        readonly variable_bindings: VarBindList
    ) {}

    /**
     * @summary Restructures an object into a BulkPDU
     * @description
     *
     * This takes an `object` and converts it to a `BulkPDU`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BulkPDU`.
     * @returns {BulkPDU}
     */
    public static _from_object (_o: { [_K in keyof (BulkPDU)]: (BulkPDU)[_K] }): BulkPDU {
        return new BulkPDU(_o.request_id, _o.non_repeaters, _o.max_repetitions, _o.variable_bindings);
    }


}

/**
 * @summary The Leading Root Component Types of BulkPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BulkPDU: $.ComponentSpec[] = [
    new $.ComponentSpec("request-id", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("non-repeaters", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("max-repetitions", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("variable-bindings", false, $.hasTag(_TagClass.universal, _UniversalType.sequence)),
];

/**
 * @summary The Trailing Root Component Types of BulkPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BulkPDU: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of BulkPDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_BulkPDU: $.ComponentSpec[] = [

];

let _cached_decoder_for_BulkPDU: $.ASN1Decoder<BulkPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BulkPDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BulkPDU} The decoded data structure.
 */
export
function _decode_BulkPDU (el: _Element): BulkPDU {
    if (!_cached_decoder_for_BulkPDU) { _cached_decoder_for_BulkPDU = function (el: _Element): BulkPDU {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("BulkPDU contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "request-id";
    sequence[1].name = "non-repeaters";
    sequence[2].name = "max-repetitions";
    sequence[3].name = "variable-bindings";
    let request_id!: INTEGER;
    let non_repeaters!: INTEGER;
    let max_repetitions!: INTEGER;
    let variable_bindings!: VarBindList;
    request_id = $._decodeInteger(sequence[0]);
    non_repeaters = $._decodeInteger(sequence[1]);
    max_repetitions = $._decodeInteger(sequence[2]);
    variable_bindings = _decode_VarBindList(sequence[3]);
    return new BulkPDU(
        request_id,
        non_repeaters,
        max_repetitions,
        variable_bindings,

    );
}; }
    return _cached_decoder_for_BulkPDU(el);
}

let _cached_encoder_for_BulkPDU: $.ASN1Encoder<BulkPDU> | null = null;

/**
 * @summary Encodes a(n) BulkPDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BulkPDU, encoded as an ASN.1 Element.
 */
export
function _encode_BulkPDU (value: BulkPDU, elGetter: $.ASN1Encoder<BulkPDU>): _Element {
    if (!_cached_encoder_for_BulkPDU) { _cached_encoder_for_BulkPDU = function (value: BulkPDU): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.request_id, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.non_repeaters, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.max_repetitions, $.BER),
            /* REQUIRED   */ _encode_VarBindList(value.variable_bindings, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BulkPDU(value, elGetter);
}


/* eslint-enable */
