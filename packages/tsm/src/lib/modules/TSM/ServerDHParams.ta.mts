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
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServerDHParams
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerDHParams ::= SEQUENCE {
 * dh-p        INTEGER(1..65535),
 * dh-g        INTEGER(1..65535),
 * dh-Ys        INTEGER(1..65535)
 * }
 * ```
 * 
 * @class
 */
export
class ServerDHParams {
    constructor (
        /**
         * @summary `dh_p`.
         * @public
         * @readonly
         */
        readonly dh_p: INTEGER,
        /**
         * @summary `dh_g`.
         * @public
         * @readonly
         */
        readonly dh_g: INTEGER,
        /**
         * @summary `dh_Ys`.
         * @public
         * @readonly
         */
        readonly dh_Ys: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a ServerDHParams
     * @description
     * 
     * This takes an `object` and converts it to a `ServerDHParams`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServerDHParams`.
     * @returns {ServerDHParams}
     */
    public static _from_object (_o: { [_K in keyof (ServerDHParams)]: (ServerDHParams)[_K] }): ServerDHParams {
        return new ServerDHParams(_o.dh_p, _o.dh_g, _o.dh_Ys);
    }


}

/**
 * @summary The Leading Root Component Types of ServerDHParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServerDHParams: $.ComponentSpec[] = [
    new $.ComponentSpec("dh-p", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("dh-g", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dh-Ys", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of ServerDHParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServerDHParams: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServerDHParams
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServerDHParams: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServerDHParams: $.ASN1Decoder<ServerDHParams> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServerDHParams
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServerDHParams (el: _Element): ServerDHParams {
    if (!_cached_decoder_for_ServerDHParams) { _cached_decoder_for_ServerDHParams = function (el: _Element): ServerDHParams {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("ServerDHParams contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "dh-p";
    sequence[1].name = "dh-g";
    sequence[2].name = "dh-Ys";
    let dh_p!: INTEGER;
    let dh_g!: INTEGER;
    let dh_Ys!: INTEGER;
    dh_p = $._decodeInteger(sequence[0]);
    dh_g = $._decodeInteger(sequence[1]);
    dh_Ys = $._decodeInteger(sequence[2]);
    const _inRange = (v: INTEGER, name: string): void => {
        const n = typeof v === "bigint" ? v : BigInt(v);
        if (n < 1n || n > 65535n) {
            throw new ASN1OverflowError(name + " violates INTEGER range");
        }
    };
    _inRange(dh_p, "ServerDHParams.dh-p");
    _inRange(dh_g, "ServerDHParams.dh-g");
    _inRange(dh_Ys, "ServerDHParams.dh-Ys");
    return new ServerDHParams(
        dh_p,
        dh_g,
        dh_Ys,

    );
}; }
    return _cached_decoder_for_ServerDHParams(el);
}

let _cached_encoder_for_ServerDHParams: $.ASN1Encoder<ServerDHParams> | null = null;

/**
 * @summary Encodes a(n) ServerDHParams into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServerDHParams, encoded as an ASN.1 Element.
 */
export
function _encode_ServerDHParams (value: ServerDHParams, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServerDHParams) { _cached_encoder_for_ServerDHParams = function (value: ServerDHParams): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.dh_p, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.dh_g, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.dh_Ys, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServerDHParams(value, elGetter);
}


/* eslint-enable */
