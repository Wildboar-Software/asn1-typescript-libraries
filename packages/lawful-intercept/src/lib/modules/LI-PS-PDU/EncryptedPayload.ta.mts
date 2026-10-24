/* eslint-disable */
import {
    type INTEGER,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Payload, _decode_Payload, _encode_Payload } from "../LI-PS-PDU/Payload.ta.mjs";
// export { Payload, _decode_Payload, _encode_Payload } from "../LI-PS-PDU/Payload.ta.mjs";


/**
 * @summary EncryptedPayload
 * @description
 * 
 * Clear payload plus a byte counter, BER-encoded and then encrypted into
 * `EncryptionContainer.encryptedPayload`. The counter ties successive PDUs
 * together so a missing PDU changes every later counter.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncryptedPayload ::= SEQUENCE
 * {
 *     byteCounter         [0] INTEGER (0..18446744073709551615),
 *         -- The sum of the sizes of all PDUs before this PDU.
 *         -- It is initialized with the unixTime (number of seconds since 01-01-1970)
 *         -- multiplied by 2^32 at first use.
 *         -- Where N is sequencenumber of the n-th PDU in transfer, and size(PDU(N))
 *         -- as defined in annex G:
 *         --      IF N > 0 THEN
 *         --      PDU[N].byteCounter = PDU[N-1].byteCounter + size(PDU[N-1])
 *         --      ELSE
 *         --      PDU[N].byteCounter = ( unixTime(now) << 32 )
 *         --      ENDIF
 *     payload             [1] Payload,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class EncryptedPayload {
    /**
     * @summary `byteCounter`.
     * @description
     *
     * Sum of the sizes of all previous PDUs. On first use it is the Unix time
     * (seconds since 1970-01-01) multiplied by 2^32, which the module writes as
     * `unixTime(now) << 32`. For later PDUs, `byteCounter(N) = byteCounter(N-1)
     * + size(PDU(N-1))`, where N is the sequence number of the N-th PDU in the
     * transfer. Annex G step 6 stores the length of the DER-encoded PS-PDU for
     * that update. The module allows 0..18446744073709551615.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly byteCounter: INTEGER;
    /**
     * @summary `payload`.
     * @description
     *
     * The clear `Payload` that was encrypted. Annex G starts from this value.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G, clause 6.2.6.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly payload: Payload;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * Extension additions this version of the module does not name.
     *
     * ETSI TS 102 232-1 V3.29.1 (2023-03), annex G.
     *
     * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        byteCounter: INTEGER,
        payload: Payload,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.byteCounter = byteCounter;
        this.payload = payload;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EncryptedPayload
     * @description
     * 
     * This takes an `object` and converts it to a `EncryptedPayload`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedPayload`.
     * @returns {EncryptedPayload}
     */
    public static _from_object (_o: { [_K in keyof (EncryptedPayload)]: (EncryptedPayload)[_K] }): EncryptedPayload {
        return new EncryptedPayload(_o.byteCounter, _o.payload, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EncryptedPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EncryptedPayload: $.ComponentSpec[] = [
    new $.ComponentSpec("byteCounter", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("payload", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EncryptedPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EncryptedPayload: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EncryptedPayload
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EncryptedPayload: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EncryptedPayload: $.ASN1Decoder<EncryptedPayload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedPayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EncryptedPayload (el: _Element): EncryptedPayload {
    if (!_cached_decoder_for_EncryptedPayload) { _cached_decoder_for_EncryptedPayload = function (el: _Element): EncryptedPayload {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EncryptedPayload contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "byteCounter";
    sequence[1].name = "payload";
    let byteCounter!: INTEGER;
    let payload!: Payload;
    byteCounter = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    {
        const _n = typeof byteCounter === "bigint" ? byteCounter : BigInt(byteCounter);
        if (_n < 0n || _n > 18446744073709551615n) {
            throw new ASN1OverflowError("EncryptedPayload.byteCounter violates INTEGER range");
        }
    }
    payload = $._decode_explicit<Payload>(() => _decode_Payload)(sequence[1]);
    return new EncryptedPayload(
        byteCounter,
        payload,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_EncryptedPayload(el);
}

let _cached_encoder_for_EncryptedPayload: $.ASN1Encoder<EncryptedPayload> | null = null;

/**
 * @summary Encodes a(n) EncryptedPayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedPayload, encoded as an ASN.1 Element.
 */
export
function _encode_EncryptedPayload (value: EncryptedPayload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EncryptedPayload) { _cached_encoder_for_EncryptedPayload = function (value: EncryptedPayload, elGetter: $.ASN1Encoder<EncryptedPayload>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.byteCounter, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_Payload, $.BER)(value.payload, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EncryptedPayload(value, elGetter);
}


/* eslint-enable */
