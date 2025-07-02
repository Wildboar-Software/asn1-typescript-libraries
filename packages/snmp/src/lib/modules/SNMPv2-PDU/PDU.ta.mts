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
    PDU_error_status,
    _decode_PDU_error_status,
    _encode_PDU_error_status
} from "../SNMPv2-PDU/PDU-error-status.ta.mjs";
import {
    VarBindList,
    _decode_VarBindList,
    _encode_VarBindList,
} from "../SNMPv2-PDU/VarBindList.ta.mjs";

/**
 * @summary PDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PDU ::= SEQUENCE {
 *         request-id INTEGER (-214783648..214783647),
 *
 *         error-status                -- sometimes ignored
 *             INTEGER {
 *                 noError(0),
 *                 tooBig(1),
 *                 noSuchName(2),      -- for proxy compatibility
 *                 badValue(3),        -- for proxy compatibility
 *                 readOnly(4),        -- for proxy compatibility
 *                 genErr(5),
 *                 noAccess(6),
 *                 wrongType(7),
 *                 wrongLength(8),
 *                 wrongEncoding(9),
 *                 wrongValue(10),
 *                 noCreation(11),
 *                 inconsistentValue(12),
 *                 resourceUnavailable(13),
 *                 commitFailed(14),
 *                 undoFailed(15),
 *                 authorizationError(16),
 *                 notWritable(17),
 *                 inconsistentName(18)
 *             },
 *
 *         error-index                 -- sometimes ignored
 *             INTEGER (0..max-bindings),
 *
 *         variable-bindings           -- values are sometimes ignored
 *             VarBindList
 *     }
 * ```
 *
 */
export
class PDU {
    constructor (
        /**
         * @summary `request_id`.
         * @public
         * @readonly
         */
        readonly request_id: INTEGER,
        /**
         * @summary `error_status`.
         * @public
         * @readonly
         */
        readonly error_status: PDU_error_status,
        /**
         * @summary `error_index`.
         * @public
         * @readonly
         */
        readonly error_index: INTEGER,
        /**
         * @summary `variable_bindings`.
         * @public
         * @readonly
         */
        readonly variable_bindings: VarBindList
    ) {}

    /**
     * @summary Restructures an object into a PDU
     * @description
     *
     * This takes an `object` and converts it to a `PDU`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PDU`.
     * @returns {PDU}
     */
    public static _from_object (_o: { [_K in keyof (PDU)]: (PDU)[_K] }): PDU {
        return new PDU(_o.request_id, _o.error_status, _o.error_index, _o.variable_bindings);
    }


}

/**
 * @summary The Leading Root Component Types of PDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PDU: $.ComponentSpec[] = [
    new $.ComponentSpec("request-id", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("error-status", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("error-index", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("variable-bindings", false, $.hasTag(_TagClass.universal, _UniversalType.sequence)),
];

/**
 * @summary The Trailing Root Component Types of PDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PDU: $.ComponentSpec[] = [

];

/**
 * @summary The Extension Addition Component Types of PDU
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export
const _extension_additions_list_spec_for_PDU: $.ComponentSpec[] = [

];

let _cached_decoder_for_PDU: $.ASN1Decoder<PDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PDU} The decoded data structure.
 */
export
function _decode_PDU (el: _Element): PDU {
    if (!_cached_decoder_for_PDU) { _cached_decoder_for_PDU = function (el: _Element): PDU {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("PDU contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "request-id";
    sequence[1].name = "error-status";
    sequence[2].name = "error-index";
    sequence[3].name = "variable-bindings";
    let request_id!: INTEGER;
    let error_status!: PDU_error_status;
    let error_index!: INTEGER;
    let variable_bindings!: VarBindList;
    request_id = $._decodeInteger(sequence[0]);
    error_status = _decode_PDU_error_status(sequence[1]);
    error_index = $._decodeInteger(sequence[2]);
    variable_bindings = _decode_VarBindList(sequence[3]);
    return new PDU(
        request_id,
        error_status,
        error_index,
        variable_bindings,

    );
}; }
    return _cached_decoder_for_PDU(el);
}

let _cached_encoder_for_PDU: $.ASN1Encoder<PDU> | null = null;

/**
 * @summary Encodes a(n) PDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDU, encoded as an ASN.1 Element.
 */
export
function _encode_PDU (value: PDU, elGetter: $.ASN1Encoder<PDU>): _Element {
    if (!_cached_encoder_for_PDU) { _cached_encoder_for_PDU = function (value: PDU): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.request_id, $.BER),
            /* REQUIRED   */ _encode_PDU_error_status(value.error_status, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.error_index, $.BER),
            /* REQUIRED   */ _encode_VarBindList(value.variable_bindings, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PDU(value, elGetter);
}


/* eslint-enable */
