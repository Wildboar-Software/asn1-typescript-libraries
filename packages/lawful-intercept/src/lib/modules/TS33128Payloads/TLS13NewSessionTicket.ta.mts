/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TLS13Extension, _decode_TLS13Extension, _encode_TLS13Extension } from "../TS33128Payloads/TLS13Extension.ta.mjs";
// export { TLS13Extension, _decode_TLS13Extension, _encode_TLS13Extension } from "../TS33128Payloads/TLS13Extension.ta.mjs";


/**
 * @summary TLS13NewSessionTicket
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13NewSessionTicket ::= SEQUENCE
 * {
 *     ticketLifeTime [1] INTEGER (0..4294967295),
 *     ticketAgeAdd   [2] INTEGER (0..4294967295),
 *     ticketNonce    [3] OCTET STRING (SIZE(0..255)),
 *     ticket         [4] OCTET STRING (SIZE(1..65535)),
 *     extensions     [5] SEQUENCE OF TLS13Extension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TLS13NewSessionTicket {
    /**
     * @summary `ticketLifeTime`.
     * @public
     * @readonly
     */
    readonly ticketLifeTime: INTEGER;
    /**
     * @summary `ticketAgeAdd`.
     * @public
     * @readonly
     */
    readonly ticketAgeAdd: INTEGER;
    /**
     * @summary `ticketNonce`.
     * @public
     * @readonly
     */
    readonly ticketNonce: OCTET_STRING;
    /**
     * @summary `ticket`.
     * @public
     * @readonly
     */
    readonly ticket: OCTET_STRING;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<TLS13Extension[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        ticketLifeTime: INTEGER,
        ticketAgeAdd: INTEGER,
        ticketNonce: OCTET_STRING,
        ticket: OCTET_STRING,
        extensions: OPTIONAL<TLS13Extension[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.ticketLifeTime = ticketLifeTime;
        if ((typeof this.ticketLifeTime === "bigint" ? this.ticketLifeTime : BigInt(this.ticketLifeTime)) < 0n || (typeof this.ticketLifeTime === "bigint" ? this.ticketLifeTime : BigInt(this.ticketLifeTime)) > 4294967295n) {
            throw new ASN1OverflowError("ticketLifeTime violates the INTEGER range constraint");
        }
        this.ticketAgeAdd = ticketAgeAdd;
        if ((typeof this.ticketAgeAdd === "bigint" ? this.ticketAgeAdd : BigInt(this.ticketAgeAdd)) < 0n || (typeof this.ticketAgeAdd === "bigint" ? this.ticketAgeAdd : BigInt(this.ticketAgeAdd)) > 4294967295n) {
            throw new ASN1OverflowError("ticketAgeAdd violates the INTEGER range constraint");
        }
        this.ticketNonce = ticketNonce;
        if (this.ticketNonce.length < 0 || this.ticketNonce.length > 255) {
            throw new ASN1SizeError("ticketNonce violates the SIZE constraint");
        }
        this.ticket = ticket;
        if (this.ticket.length < 1 || this.ticket.length > 65535) {
            throw new ASN1SizeError("ticket violates the SIZE constraint");
        }
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TLS13NewSessionTicket
     * @description
     * 
     * This takes an `object` and converts it to a `TLS13NewSessionTicket`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TLS13NewSessionTicket`.
     * @returns {TLS13NewSessionTicket}
     */
    public static _from_object (_o: { [_K in keyof (TLS13NewSessionTicket)]: (TLS13NewSessionTicket)[_K] }): TLS13NewSessionTicket {
        return new TLS13NewSessionTicket(_o.ticketLifeTime, _o.ticketAgeAdd, _o.ticketNonce, _o.ticket, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TLS13NewSessionTicket
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TLS13NewSessionTicket: $.ComponentSpec[] = [
    new $.ComponentSpec("ticketLifeTime", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ticketAgeAdd", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("ticketNonce", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("ticket", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of TLS13NewSessionTicket
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TLS13NewSessionTicket: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TLS13NewSessionTicket
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TLS13NewSessionTicket: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TLS13NewSessionTicket: $.ASN1Decoder<TLS13NewSessionTicket> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TLS13NewSessionTicket
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TLS13NewSessionTicket (el: _Element): TLS13NewSessionTicket {
    if (!_cached_decoder_for_TLS13NewSessionTicket) { _cached_decoder_for_TLS13NewSessionTicket = function (el: _Element): TLS13NewSessionTicket {
    let ticketLifeTime!: INTEGER;
    let ticketAgeAdd!: INTEGER;
    let ticketNonce!: OCTET_STRING;
    let ticket!: OCTET_STRING;
    let extensions: OPTIONAL<TLS13Extension[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ticketLifeTime": (_el: _Element): void => { ticketLifeTime = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "ticketAgeAdd": (_el: _Element): void => { ticketAgeAdd = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "ticketNonce": (_el: _Element): void => { ticketNonce = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "ticket": (_el: _Element): void => { ticket = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<TLS13Extension[]>(() => $._decodeSequenceOf<TLS13Extension>(() => _decode_TLS13Extension))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TLS13NewSessionTicket,
        _extension_additions_list_spec_for_TLS13NewSessionTicket,
        _root_component_type_list_2_spec_for_TLS13NewSessionTicket,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TLS13NewSessionTicket(
        ticketLifeTime,
        ticketAgeAdd,
        ticketNonce,
        ticket,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TLS13NewSessionTicket(el);
}

let _cached_encoder_for_TLS13NewSessionTicket: $.ASN1Encoder<TLS13NewSessionTicket> | null = null;

/**
 * @summary Encodes a(n) TLS13NewSessionTicket into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLS13NewSessionTicket, encoded as an ASN.1 Element.
 */
export
function _encode_TLS13NewSessionTicket (value: TLS13NewSessionTicket, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TLS13NewSessionTicket) { _cached_encoder_for_TLS13NewSessionTicket = function (value: TLS13NewSessionTicket, elGetter: $.ASN1Encoder<TLS13NewSessionTicket>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.ticketLifeTime, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.ticketAgeAdd, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.ticketNonce, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.ticket, $.BER);
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<TLS13Extension>(() => _encode_TLS13Extension, $.BER), $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TLS13NewSessionTicket(value, elGetter);
}


/* eslint-enable */
