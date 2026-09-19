/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TLS13UAStarParams, _decode_TLS13UAStarParams, _encode_TLS13UAStarParams } from "../TS33128Payloads/TLS13UAStarParams.ta.mjs";
// export { TLS13UAStarParams, _decode_TLS13UAStarParams, _encode_TLS13UAStarParams } from "../TS33128Payloads/TLS13UAStarParams.ta.mjs";


/**
 * @summary DTLS13UAStarParams
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DTLS13UAStarParams ::= SEQUENCE
 * {
 *     tLS13CommonParams [1] TLS13UAStarParams,
 *     -- RFC9147 [146] clause 4.2
 *     clientEpoch       [2] INTEGER,
 *     -- RFC9147 [146] clause 4.2
 *     serverEpoch       [3] INTEGER,
 *     -- RFC9147 [146] clause 4.2.3
 *     clientSnKey       [4] OCTET STRING (SIZE(1..65535)) OPTIONAL,
 *     -- RFC9147 [146] clause 4.2.3
 *     serverSnKey       [5] OCTET STRING (SIZE(1..65535)) OPTIONAL,
 *     -- RFC9146 [145]
 *     connectionID      [6] OCTET STRING (SIZE(0..255)) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DTLS13UAStarParams {
    constructor (
        /**
         * @summary `tLS13CommonParams`.
         * @public
         * @readonly
         */
        readonly tLS13CommonParams: TLS13UAStarParams,
        /**
         * @summary `clientEpoch`.
         * @public
         * @readonly
         */
        readonly clientEpoch: INTEGER,
        /**
         * @summary `serverEpoch`.
         * @public
         * @readonly
         */
        readonly serverEpoch: INTEGER,
        /**
         * @summary `clientSnKey`.
         * @public
         * @readonly
         */
        readonly clientSnKey: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `serverSnKey`.
         * @public
         * @readonly
         */
        readonly serverSnKey: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `connectionID`.
         * @public
         * @readonly
         */
        readonly connectionID: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a DTLS13UAStarParams
     * @description
     * 
     * This takes an `object` and converts it to a `DTLS13UAStarParams`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DTLS13UAStarParams`.
     * @returns {DTLS13UAStarParams}
     */
    public static _from_object (_o: { [_K in keyof (DTLS13UAStarParams)]: (DTLS13UAStarParams)[_K] }): DTLS13UAStarParams {
        return new DTLS13UAStarParams(_o.tLS13CommonParams, _o.clientEpoch, _o.serverEpoch, _o.clientSnKey, _o.serverSnKey, _o.connectionID);
    }


}

/**
 * @summary The Leading Root Component Types of DTLS13UAStarParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DTLS13UAStarParams: $.ComponentSpec[] = [
    new $.ComponentSpec("tLS13CommonParams", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("clientEpoch", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("serverEpoch", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("clientSnKey", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("serverSnKey", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("connectionID", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of DTLS13UAStarParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DTLS13UAStarParams: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DTLS13UAStarParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DTLS13UAStarParams: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DTLS13UAStarParams: $.ASN1Decoder<DTLS13UAStarParams> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DTLS13UAStarParams
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DTLS13UAStarParams (el: _Element): DTLS13UAStarParams {
    if (!_cached_decoder_for_DTLS13UAStarParams) { _cached_decoder_for_DTLS13UAStarParams = function (el: _Element): DTLS13UAStarParams {
    let tLS13CommonParams!: TLS13UAStarParams;
    let clientEpoch!: INTEGER;
    let serverEpoch!: INTEGER;
    let clientSnKey: OPTIONAL<OCTET_STRING>;
    let serverSnKey: OPTIONAL<OCTET_STRING>;
    let connectionID: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "tLS13CommonParams": (_el: _Element): void => { tLS13CommonParams = $._decode_implicit<TLS13UAStarParams>(() => _decode_TLS13UAStarParams)(_el); },
        "clientEpoch": (_el: _Element): void => { clientEpoch = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serverEpoch": (_el: _Element): void => { serverEpoch = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "clientSnKey": (_el: _Element): void => { clientSnKey = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "serverSnKey": (_el: _Element): void => { serverSnKey = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "connectionID": (_el: _Element): void => { connectionID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DTLS13UAStarParams,
        _extension_additions_list_spec_for_DTLS13UAStarParams,
        _root_component_type_list_2_spec_for_DTLS13UAStarParams,
        undefined,
    );
    return new DTLS13UAStarParams(
        tLS13CommonParams,
        clientEpoch,
        serverEpoch,
        clientSnKey,
        serverSnKey,
        connectionID
    );
}; }
    return _cached_decoder_for_DTLS13UAStarParams(el);
}

let _cached_encoder_for_DTLS13UAStarParams: $.ASN1Encoder<DTLS13UAStarParams> | null = null;

/**
 * @summary Encodes a(n) DTLS13UAStarParams into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DTLS13UAStarParams, encoded as an ASN.1 Element.
 */
export
function _encode_DTLS13UAStarParams (value: DTLS13UAStarParams, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DTLS13UAStarParams) { _cached_encoder_for_DTLS13UAStarParams = function (value: DTLS13UAStarParams, elGetter: $.ASN1Encoder<DTLS13UAStarParams>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TLS13UAStarParams, $.BER)(value.tLS13CommonParams, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.clientEpoch, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.serverEpoch, $.BER),
            /* IF_ABSENT  */ ((value.clientSnKey === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.clientSnKey, $.BER)),
            /* IF_ABSENT  */ ((value.serverSnKey === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.serverSnKey, $.BER)),
            /* IF_ABSENT  */ ((value.connectionID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeOctetString, $.BER)(value.connectionID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DTLS13UAStarParams(value, elGetter);
}


/* eslint-enable */
