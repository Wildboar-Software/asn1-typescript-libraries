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
 * As there are often multiple identifiers that may be known at an NF or by the
 * MDF, a single type capable of reporting multiple User Identifiers was
 * defined.
 *
 * 3GPP TS 33.128, clause 8.3.2.1.
 * https://www.3gpp.org/DynaReport/33128.htm
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
    /**
     * @summary `fiveGSSubscriberIDs`.
     * @description
     *
     * Contains the list of 5GS identifiers for a user. Shall be present when
     * any 5GS identifiers are known at the NF where the POI is located or at
     * the MDF.
     *
     * 3GPP TS 33.128, clause 8.3.2.1.
     *
     * @public
     * @readonly
     */
    readonly fiveGSSubscriberIDs: OPTIONAL<FiveGSSubscriberIDs>;
    /**
     * @summary `ePSSubscriberIDs`.
     * @description
     *
     * Contains the list of EPS identifiers for a user. Shall be present when
     * any EPS identifiers are known at the NF where the POI is located or at
     * the MDF.
     *
     * 3GPP TS 33.128, clause 8.3.2.1.
     *
     * @public
     * @readonly
     */
    readonly ePSSubscriberIDs: OPTIONAL<EPSSubscriberIDs>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        fiveGSSubscriberIDs?: OPTIONAL<FiveGSSubscriberIDs>,
        ePSSubscriberIDs?: OPTIONAL<EPSSubscriberIDs>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.fiveGSSubscriberIDs = fiveGSSubscriberIDs;
        this.ePSSubscriberIDs = ePSSubscriberIDs;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new UserIdentifiers(_o.fiveGSSubscriberIDs, _o.ePSSubscriberIDs, _o._unrecognizedExtensionsList);
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
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "fiveGSSubscriberIDs": (_el: _Element): void => { fiveGSSubscriberIDs = $._decode_implicit<FiveGSSubscriberIDs>(() => _decode_FiveGSSubscriberIDs)(_el); },
        "ePSSubscriberIDs": (_el: _Element): void => { ePSSubscriberIDs = $._decode_implicit<EPSSubscriberIDs>(() => _decode_EPSSubscriberIDs)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UserIdentifiers,
        _extension_additions_list_spec_for_UserIdentifiers,
        _root_component_type_list_2_spec_for_UserIdentifiers,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new UserIdentifiers(
        fiveGSSubscriberIDs,
        ePSSubscriberIDs,
        _unrecognizedExtensionsList
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.fiveGSSubscriberIDs !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_FiveGSSubscriberIDs, $.BER)(value.fiveGSSubscriberIDs, $.BER);
    }
    if (value.ePSSubscriberIDs !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_EPSSubscriberIDs, $.BER)(value.ePSSubscriberIDs, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_UserIdentifiers(value, elGetter);
}


/* eslint-enable */
