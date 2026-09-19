/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FiveGSSubscriberIDs, _decode_FiveGSSubscriberIDs, _encode_FiveGSSubscriberIDs } from "../TS33128Payloads/FiveGSSubscriberIDs.ta.mjs";
// export { FiveGSSubscriberIDs, _decode_FiveGSSubscriberIDs, _encode_FiveGSSubscriberIDs } from "../TS33128Payloads/FiveGSSubscriberIDs.ta.mjs";
import { EPSSubscriberIDs, _decode_EPSSubscriberIDs, _encode_EPSSubscriberIDs } from "../TS33128Payloads/EPSSubscriberIDs.ta.mjs";
// export { EPSSubscriberIDs, _decode_EPSSubscriberIDs, _encode_EPSSubscriberIDs } from "../TS33128Payloads/EPSSubscriberIDs.ta.mjs";


/**
 * @summary UserIdentifiers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserIdentifiers ::= SEQUENCE
 * {
 *     fiveGSSubscriberIDs [1] FiveGSSubscriberIDs OPTIONAL,
 *     ePSSubscriberIDs    [2] EPSSubscriberIDs OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UserIdentifiers {
    constructor (
        /**
         * @summary `fiveGSSubscriberIDs`.
         * @public
         * @readonly
         */
        readonly fiveGSSubscriberIDs: OPTIONAL<FiveGSSubscriberIDs>,
        /**
         * @summary `ePSSubscriberIDs`.
         * @public
         * @readonly
         */
        readonly ePSSubscriberIDs: OPTIONAL<EPSSubscriberIDs>
    ) {}

    /**
     * @summary Restructures an object into a UserIdentifiers
     * @description
     * 
     * This takes an `object` and converts it to a `UserIdentifiers`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UserIdentifiers`.
     * @returns {UserIdentifiers}
     */
    public static _from_object (_o: { [_K in keyof (UserIdentifiers)]: (UserIdentifiers)[_K] }): UserIdentifiers {
        return new UserIdentifiers(_o.fiveGSSubscriberIDs, _o.ePSSubscriberIDs);
    }


}

/**
 * @summary The Leading Root Component Types of UserIdentifiers
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UserIdentifiers: $.ComponentSpec[] = [
    new $.ComponentSpec("fiveGSSubscriberIDs", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("ePSSubscriberIDs", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of UserIdentifiers
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UserIdentifiers: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UserIdentifiers
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UserIdentifiers: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UserIdentifiers: $.ASN1Decoder<UserIdentifiers> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserIdentifiers
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserIdentifiers (el: _Element): UserIdentifiers {
    if (!_cached_decoder_for_UserIdentifiers) { _cached_decoder_for_UserIdentifiers = function (el: _Element): UserIdentifiers {
    let fiveGSSubscriberIDs: OPTIONAL<FiveGSSubscriberIDs>;
    let ePSSubscriberIDs: OPTIONAL<EPSSubscriberIDs>;
    const callbacks: $.DecodingMap = {
        "fiveGSSubscriberIDs": (_el: _Element): void => { fiveGSSubscriberIDs = $._decode_implicit<FiveGSSubscriberIDs>(() => _decode_FiveGSSubscriberIDs)(_el); },
        "ePSSubscriberIDs": (_el: _Element): void => { ePSSubscriberIDs = $._decode_implicit<EPSSubscriberIDs>(() => _decode_EPSSubscriberIDs)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UserIdentifiers,
        _extension_additions_list_spec_for_UserIdentifiers,
        _root_component_type_list_2_spec_for_UserIdentifiers,
        undefined,
    );
    return new UserIdentifiers(
        fiveGSSubscriberIDs,
        ePSSubscriberIDs
    );
}; }
    return _cached_decoder_for_UserIdentifiers(el);
}

let _cached_encoder_for_UserIdentifiers: $.ASN1Encoder<UserIdentifiers> | null = null;

/**
 * @summary Encodes a(n) UserIdentifiers into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserIdentifiers, encoded as an ASN.1 Element.
 */
export
function _encode_UserIdentifiers (value: UserIdentifiers, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserIdentifiers) { _cached_encoder_for_UserIdentifiers = function (value: UserIdentifiers, elGetter: $.ASN1Encoder<UserIdentifiers>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.fiveGSSubscriberIDs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_FiveGSSubscriberIDs, $.BER)(value.fiveGSSubscriberIDs, $.BER)),
            /* IF_ABSENT  */ ((value.ePSSubscriberIDs === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_EPSSubscriberIDs, $.BER)(value.ePSSubscriberIDs, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UserIdentifiers(value, elGetter);
}


/* eslint-enable */
