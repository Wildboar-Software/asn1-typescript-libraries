/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    type OCTET_STRING,
    ASN1OverflowError,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TLS13PSKIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13PSKIdentity ::= SEQUENCE
 * {
 *     identity            [1] OCTET STRING (SIZE(1..65535)),
 *     obfuscatedTicketAge [2] INTEGER (0..4294967295)
 * }
 * ```
 * 
 * @class
 */
export
class TLS13PSKIdentity {
    /**
     * @summary `identity`.
     * @public
     * @readonly
     */
    readonly identity: OCTET_STRING;
    /**
     * @summary `obfuscatedTicketAge`.
     * @public
     * @readonly
     */
    readonly obfuscatedTicketAge: INTEGER;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        identity: OCTET_STRING,
        obfuscatedTicketAge: INTEGER,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.identity = identity;
        this.obfuscatedTicketAge = obfuscatedTicketAge;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TLS13PSKIdentity
     * @description
     * 
     * This takes an `object` and converts it to a `TLS13PSKIdentity`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TLS13PSKIdentity`.
     * @returns {TLS13PSKIdentity}
     */
    public static _from_object (_o: { [_K in keyof (TLS13PSKIdentity)]: (TLS13PSKIdentity)[_K] }): TLS13PSKIdentity {
        return new TLS13PSKIdentity(_o.identity, _o.obfuscatedTicketAge, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TLS13PSKIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TLS13PSKIdentity: $.ComponentSpec[] = [
    new $.ComponentSpec("identity", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("obfuscatedTicketAge", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TLS13PSKIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TLS13PSKIdentity: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TLS13PSKIdentity
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TLS13PSKIdentity: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TLS13PSKIdentity: $.ASN1Decoder<TLS13PSKIdentity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TLS13PSKIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TLS13PSKIdentity (el: _Element): TLS13PSKIdentity {
    if (!_cached_decoder_for_TLS13PSKIdentity) { _cached_decoder_for_TLS13PSKIdentity = function (el: _Element): TLS13PSKIdentity {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TLS13PSKIdentity contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "identity";
    sequence[1].name = "obfuscatedTicketAge";
    let identity!: OCTET_STRING;
    let obfuscatedTicketAge!: INTEGER;
    identity = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    {
        if (identity.length < 1 || identity.length > 65535) {
            throw new ASN1SizeError("TLS13PSKIdentity.identity violates SIZE constraint");
        }
    }
    obfuscatedTicketAge = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    {
        const _n = typeof obfuscatedTicketAge === "bigint" ? obfuscatedTicketAge : BigInt(obfuscatedTicketAge);
        if (_n < 0n || _n > 4294967295n) {
            throw new ASN1OverflowError("TLS13PSKIdentity.obfuscatedTicketAge violates INTEGER range");
        }
    }
    return new TLS13PSKIdentity(
        identity,
        obfuscatedTicketAge,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_TLS13PSKIdentity(el);
}

let _cached_encoder_for_TLS13PSKIdentity: $.ASN1Encoder<TLS13PSKIdentity> | null = null;

/**
 * @summary Encodes a(n) TLS13PSKIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLS13PSKIdentity, encoded as an ASN.1 Element.
 */
export
function _encode_TLS13PSKIdentity (value: TLS13PSKIdentity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TLS13PSKIdentity) { _cached_encoder_for_TLS13PSKIdentity = function (value: TLS13PSKIdentity, elGetter: $.ASN1Encoder<TLS13PSKIdentity>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.identity, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.obfuscatedTicketAge, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TLS13PSKIdentity(value, elGetter);
}


/* eslint-enable */
