/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Integer32, _decode_Integer32, _encode_Integer32 } from "../EmberPlus-Glow/Integer32.ta.mjs";
// export { Integer32, _decode_Integer32, _encode_Integer32 } from "../EmberPlus-Glow/Integer32.ta.mjs";
import { PackedNumbers, _decode_PackedNumbers, _encode_PackedNumbers } from "../EmberPlus-Glow/PackedNumbers.ta.mjs";
// export { PackedNumbers, _decode_PackedNumbers, _encode_PackedNumbers } from "../EmberPlus-Glow/PackedNumbers.ta.mjs";
import { ConnectionOperation, _decode_ConnectionOperation, _encode_ConnectionOperation } from "../EmberPlus-Glow/ConnectionOperation.ta.mjs";
// export { ConnectionOperation, ConnectionOperation_absolute /* IMPORTED_LONG_NAMED_INTEGER */, absolute /* IMPORTED_SHORT_NAMED_INTEGER */, ConnectionOperation_connect /* IMPORTED_LONG_NAMED_INTEGER */, connect /* IMPORTED_SHORT_NAMED_INTEGER */, ConnectionOperation_disconnect /* IMPORTED_LONG_NAMED_INTEGER */, disconnect /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ConnectionOperation, _encode_ConnectionOperation } from "../EmberPlus-Glow/ConnectionOperation.ta.mjs";
import { ConnectionDisposition, _decode_ConnectionDisposition, _encode_ConnectionDisposition } from "../EmberPlus-Glow/ConnectionDisposition.ta.mjs";
// export { ConnectionDisposition, ConnectionDisposition_tally /* IMPORTED_LONG_NAMED_INTEGER */, tally /* IMPORTED_SHORT_NAMED_INTEGER */, ConnectionDisposition_modified /* IMPORTED_LONG_NAMED_INTEGER */, modified /* IMPORTED_SHORT_NAMED_INTEGER */, ConnectionDisposition_pending /* IMPORTED_LONG_NAMED_INTEGER */, pending /* IMPORTED_SHORT_NAMED_INTEGER */, ConnectionDisposition_locked /* IMPORTED_LONG_NAMED_INTEGER */, locked /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ConnectionDisposition, _encode_ConnectionDisposition } from "../EmberPlus-Glow/ConnectionDisposition.ta.mjs";


/**
 * @summary Connection
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Connection ::= [APPLICATION 16] IMPLICIT
 *         SEQUENCE {
 *             target         [0] Integer32,
 *             sources        [1] PackedNumbers         OPTIONAL, -- not present or empty array means "none"
 *             operation      [2] ConnectionOperation   OPTIONAL,
 *             disposition    [3] ConnectionDisposition OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class Connection {
    constructor (
        /**
         * @summary `target`.
         * @public
         * @readonly
         */
        readonly target: Integer32,
        /**
         * @summary `sources`.
         * @public
         * @readonly
         */
        readonly sources: OPTIONAL<PackedNumbers>,
        /**
         * @summary `operation`.
         * @public
         * @readonly
         */
        readonly operation: OPTIONAL<ConnectionOperation>,
        /**
         * @summary `disposition`.
         * @public
         * @readonly
         */
        readonly disposition: OPTIONAL<ConnectionDisposition>
    ) {}

    /**
     * @summary Restructures an object into a Connection
     * @description
     * 
     * This takes an `object` and converts it to a `Connection`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Connection`.
     * @returns {Connection}
     */
    public static _from_object (_o: { [_K in keyof (Connection)]: (Connection)[_K] }): Connection {
        return new Connection(_o.target, _o.sources, _o.operation, _o.disposition);
    }


}

/**
 * @summary The Leading Root Component Types of Connection
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Connection: $.ComponentSpec[] = [
    new $.ComponentSpec("target", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("sources", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("operation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("disposition", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of Connection
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Connection: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Connection
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Connection: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Connection: $.ASN1Decoder<Connection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Connection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Connection (el: _Element): Connection {
    if (!_cached_decoder_for_Connection) { _cached_decoder_for_Connection = $._decode_implicit<Connection>(() => function (el: _Element): Connection {
    let target!: Integer32;
    let sources: OPTIONAL<PackedNumbers>;
    let operation: OPTIONAL<ConnectionOperation>;
    let disposition: OPTIONAL<ConnectionDisposition>;
    const callbacks: $.DecodingMap = {
        "target": (_el: _Element): void => { target = $._decode_explicit<Integer32>(() => _decode_Integer32)(_el); },
        "sources": (_el: _Element): void => { sources = $._decode_explicit<PackedNumbers>(() => _decode_PackedNumbers)(_el); },
        "operation": (_el: _Element): void => { operation = $._decode_explicit<ConnectionOperation>(() => _decode_ConnectionOperation)(_el); },
        "disposition": (_el: _Element): void => { disposition = $._decode_explicit<ConnectionDisposition>(() => _decode_ConnectionDisposition)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Connection,
        _extension_additions_list_spec_for_Connection,
        _root_component_type_list_2_spec_for_Connection,
        undefined,
    );
    return new Connection(
        target,
        sources,
        operation,
        disposition
    );
}); }
    return _cached_decoder_for_Connection(el);
}

let _cached_encoder_for_Connection: $.ASN1Encoder<Connection> | null = null;

/**
 * @summary Encodes a(n) Connection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Connection, encoded as an ASN.1 Element.
 */
export
function _encode_Connection (value: Connection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Connection) { _cached_encoder_for_Connection = $._encode_implicit(_TagClass.application, 16, () => function (value: Connection, elGetter: $.ASN1Encoder<Connection>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Integer32, $.BER)(value.target, $.BER),
            /* IF_ABSENT  */ ((value.sources === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_PackedNumbers, $.BER)(value.sources, $.BER)),
            /* IF_ABSENT  */ ((value.operation === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_ConnectionOperation, $.BER)(value.operation, $.BER)),
            /* IF_ABSENT  */ ((value.disposition === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_ConnectionDisposition, $.BER)(value.disposition, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_Connection(value, elGetter);
}


/* eslint-enable */
