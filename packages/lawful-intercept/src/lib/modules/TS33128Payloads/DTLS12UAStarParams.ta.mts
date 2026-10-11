/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TLS12UAStarParams, _decode_TLS12UAStarParams, _encode_TLS12UAStarParams } from "../TS33128Payloads/TLS12UAStarParams.ta.mjs";
// export { TLS12UAStarParams, _decode_TLS12UAStarParams, _encode_TLS12UAStarParams } from "../TS33128Payloads/TLS12UAStarParams.ta.mjs";


/**
 * @summary DTLS12UAStarParams
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DTLS12UAStarParams ::= SEQUENCE
 * {
 *     tLS12CommonParams [1] TLS12UAStarParams,
 *     -- RFC 6347 [144] clause 4.1
 *     clientEpoch       [2] INTEGER,
 *     -- RFC 6347 [144] clause 4.1
 *     serverEpoch       [3] INTEGER,
 *     -- RFC 9146 [145]
 *     connectionID      [4] OCTET STRING (SIZE(0..255)) OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DTLS12UAStarParams {
    /**
     * @summary `tLS12CommonParams`.
     * @public
     * @readonly
     */
    readonly tLS12CommonParams: TLS12UAStarParams;
    /**
     * @summary `clientEpoch`.
     * @public
     * @readonly
     */
    readonly clientEpoch: INTEGER;
    /**
     * @summary `serverEpoch`.
     * @public
     * @readonly
     */
    readonly serverEpoch: INTEGER;
    /**
     * @summary `connectionID`.
     * @public
     * @readonly
     */
    readonly connectionID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        tLS12CommonParams: TLS12UAStarParams,
        clientEpoch: INTEGER,
        serverEpoch: INTEGER,
        connectionID: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.tLS12CommonParams = tLS12CommonParams;
        this.clientEpoch = clientEpoch;
        this.serverEpoch = serverEpoch;
        this.connectionID = connectionID;
        if (this.connectionID !== undefined && (this.connectionID.length < 0 || this.connectionID.length > 255)) {
            throw new ASN1SizeError("connectionID violates the SIZE constraint");
        }
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a DTLS12UAStarParams
     * @description
     * 
     * This takes an `object` and converts it to a `DTLS12UAStarParams`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DTLS12UAStarParams`.
     * @returns {DTLS12UAStarParams}
     */
    public static _from_object (_o: { [_K in keyof (DTLS12UAStarParams)]: (DTLS12UAStarParams)[_K] }): DTLS12UAStarParams {
        return new DTLS12UAStarParams(_o.tLS12CommonParams, _o.clientEpoch, _o.serverEpoch, _o.connectionID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of DTLS12UAStarParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DTLS12UAStarParams: $.ComponentSpec[] = [
    new $.ComponentSpec("tLS12CommonParams", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("clientEpoch", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("serverEpoch", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("connectionID", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of DTLS12UAStarParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DTLS12UAStarParams: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DTLS12UAStarParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DTLS12UAStarParams: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DTLS12UAStarParams: $.ASN1Decoder<DTLS12UAStarParams> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DTLS12UAStarParams
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DTLS12UAStarParams (el: _Element): DTLS12UAStarParams {
    if (!_cached_decoder_for_DTLS12UAStarParams) { _cached_decoder_for_DTLS12UAStarParams = function (el: _Element): DTLS12UAStarParams {
    let tLS12CommonParams!: TLS12UAStarParams;
    let clientEpoch!: INTEGER;
    let serverEpoch!: INTEGER;
    let connectionID: OPTIONAL<OCTET_STRING>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "tLS12CommonParams": (_el: _Element): void => { tLS12CommonParams = $._decode_implicit<TLS12UAStarParams>(() => _decode_TLS12UAStarParams)(_el); },
        "clientEpoch": (_el: _Element): void => { clientEpoch = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "serverEpoch": (_el: _Element): void => { serverEpoch = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "connectionID": (_el: _Element): void => { connectionID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DTLS12UAStarParams,
        _extension_additions_list_spec_for_DTLS12UAStarParams,
        _root_component_type_list_2_spec_for_DTLS12UAStarParams,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DTLS12UAStarParams(
        tLS12CommonParams,
        clientEpoch,
        serverEpoch,
        connectionID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DTLS12UAStarParams(el);
}

let _cached_encoder_for_DTLS12UAStarParams: $.ASN1Encoder<DTLS12UAStarParams> | null = null;

/**
 * @summary Encodes a(n) DTLS12UAStarParams into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DTLS12UAStarParams, encoded as an ASN.1 Element.
 */
export
function _encode_DTLS12UAStarParams (value: DTLS12UAStarParams, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DTLS12UAStarParams) { _cached_encoder_for_DTLS12UAStarParams = function (value: DTLS12UAStarParams, _elGetter: $.ASN1Encoder<DTLS12UAStarParams>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_TLS12UAStarParams, $.BER)(value.tLS12CommonParams, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.clientEpoch, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.serverEpoch, $.BER);
    if (value.connectionID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.connectionID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DTLS12UAStarParams(value, elGetter);
}


/* eslint-enable */
