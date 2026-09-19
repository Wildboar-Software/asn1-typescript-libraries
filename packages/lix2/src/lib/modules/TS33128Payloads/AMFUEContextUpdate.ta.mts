/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
// export { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
import { RANUEContextModification, _decode_RANUEContextModification, _encode_RANUEContextModification } from "../TS33128Payloads/RANUEContextModification.ta.mjs";
// export { RANUEContextModification, _decode_RANUEContextModification, _encode_RANUEContextModification } from "../TS33128Payloads/RANUEContextModification.ta.mjs";
import { RANDownlinkNASTransport, _decode_RANDownlinkNASTransport, _encode_RANDownlinkNASTransport } from "../TS33128Payloads/RANDownlinkNASTransport.ta.mjs";
// export { RANDownlinkNASTransport, _decode_RANDownlinkNASTransport, _encode_RANDownlinkNASTransport } from "../TS33128Payloads/RANDownlinkNASTransport.ta.mjs";


/**
 * @summary AMFUEContextUpdate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFUEContextUpdate ::= SEQUENCE
 * {
 *     userIdentifiers          [1] UserIdentifiers,
 *     rANUEContextModification [2] RANUEContextModification OPTIONAL,
 *     rANDownlinkNASTransport  [3] RANDownlinkNASTransport OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AMFUEContextUpdate {
    constructor (
        /**
         * @summary `userIdentifiers`.
         * @public
         * @readonly
         */
        readonly userIdentifiers: UserIdentifiers,
        /**
         * @summary `rANUEContextModification`.
         * @public
         * @readonly
         */
        readonly rANUEContextModification: OPTIONAL<RANUEContextModification>,
        /**
         * @summary `rANDownlinkNASTransport`.
         * @public
         * @readonly
         */
        readonly rANDownlinkNASTransport: OPTIONAL<RANDownlinkNASTransport>
    ) {}

    /**
     * @summary Restructures an object into a AMFUEContextUpdate
     * @description
     * 
     * This takes an `object` and converts it to a `AMFUEContextUpdate`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMFUEContextUpdate`.
     * @returns {AMFUEContextUpdate}
     */
    public static _from_object (_o: { [_K in keyof (AMFUEContextUpdate)]: (AMFUEContextUpdate)[_K] }): AMFUEContextUpdate {
        return new AMFUEContextUpdate(_o.userIdentifiers, _o.rANUEContextModification, _o.rANDownlinkNASTransport);
    }


}

/**
 * @summary The Leading Root Component Types of AMFUEContextUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMFUEContextUpdate: $.ComponentSpec[] = [
    new $.ComponentSpec("userIdentifiers", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("rANUEContextModification", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("rANDownlinkNASTransport", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AMFUEContextUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMFUEContextUpdate: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMFUEContextUpdate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMFUEContextUpdate: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AMFUEContextUpdate: $.ASN1Decoder<AMFUEContextUpdate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFUEContextUpdate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFUEContextUpdate (el: _Element): AMFUEContextUpdate {
    if (!_cached_decoder_for_AMFUEContextUpdate) { _cached_decoder_for_AMFUEContextUpdate = function (el: _Element): AMFUEContextUpdate {
    let userIdentifiers!: UserIdentifiers;
    let rANUEContextModification: OPTIONAL<RANUEContextModification>;
    let rANDownlinkNASTransport: OPTIONAL<RANDownlinkNASTransport>;
    const callbacks: $.DecodingMap = {
        "userIdentifiers": (_el: _Element): void => { userIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); },
        "rANUEContextModification": (_el: _Element): void => { rANUEContextModification = $._decode_implicit<RANUEContextModification>(() => _decode_RANUEContextModification)(_el); },
        "rANDownlinkNASTransport": (_el: _Element): void => { rANDownlinkNASTransport = $._decode_implicit<RANDownlinkNASTransport>(() => _decode_RANDownlinkNASTransport)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AMFUEContextUpdate,
        _extension_additions_list_spec_for_AMFUEContextUpdate,
        _root_component_type_list_2_spec_for_AMFUEContextUpdate,
        undefined,
    );
    return new AMFUEContextUpdate(
        userIdentifiers,
        rANUEContextModification,
        rANDownlinkNASTransport
    );
}; }
    return _cached_decoder_for_AMFUEContextUpdate(el);
}

let _cached_encoder_for_AMFUEContextUpdate: $.ASN1Encoder<AMFUEContextUpdate> | null = null;

/**
 * @summary Encodes a(n) AMFUEContextUpdate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFUEContextUpdate, encoded as an ASN.1 Element.
 */
export
function _encode_AMFUEContextUpdate (value: AMFUEContextUpdate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFUEContextUpdate) { _cached_encoder_for_AMFUEContextUpdate = function (value: AMFUEContextUpdate, elGetter: $.ASN1Encoder<AMFUEContextUpdate>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_UserIdentifiers, $.BER)(value.userIdentifiers, $.BER),
            /* IF_ABSENT  */ ((value.rANUEContextModification === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_RANUEContextModification, $.BER)(value.rANUEContextModification, $.BER)),
            /* IF_ABSENT  */ ((value.rANDownlinkNASTransport === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_RANDownlinkNASTransport, $.BER)(value.rANDownlinkNASTransport, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AMFUEContextUpdate(value, elGetter);
}


/* eslint-enable */
