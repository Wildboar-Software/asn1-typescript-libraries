/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Messaging_Party_Qualifier, _decode_Messaging_Party_Qualifier, _encode_Messaging_Party_Qualifier, _enum_for_Messaging_Party_Qualifier } from "../EmailPDU/Messaging-Party-Qualifier.ta.mjs";
// export { Messaging_Party_Qualifier, _enum_for_Messaging_Party_Qualifier, Messaging_Party_Qualifier_unknown_party /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown_party /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Party_Qualifier_originating_party /* IMPORTED_LONG_ENUMERATION_ITEM */, originating_party /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Party_Qualifier_terminating_party /* IMPORTED_LONG_ENUMERATION_ITEM */, terminating_party /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Party_Qualifier_associated_party /* IMPORTED_LONG_ENUMERATION_ITEM */, associated_party /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Messaging_Party_Qualifier, _encode_Messaging_Party_Qualifier } from "../EmailPDU/Messaging-Party-Qualifier.ta.mjs";
import { Messaging_Party_Identity, _decode_Messaging_Party_Identity, _encode_Messaging_Party_Identity } from "../EmailPDU/Messaging-Party-Identity.ta.mjs";
// export { Messaging_Party_Identity, _decode_Messaging_Party_Identity, _encode_Messaging_Party_Identity } from "../EmailPDU/Messaging-Party-Identity.ta.mjs";
import { Messaging_Party_Validity, _decode_Messaging_Party_Validity, _encode_Messaging_Party_Validity, _enum_for_Messaging_Party_Validity } from "../EmailPDU/Messaging-Party-Validity.ta.mjs";
// export { Messaging_Party_Validity, _enum_for_Messaging_Party_Validity, Messaging_Party_Validity_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, Messaging_Party_Validity_trusted /* IMPORTED_LONG_ENUMERATION_ITEM */, trusted /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Party_Validity_untrusted /* IMPORTED_LONG_ENUMERATION_ITEM */, untrusted /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Messaging_Party_Validity, _encode_Messaging_Party_Validity } from "../EmailPDU/Messaging-Party-Validity.ta.mjs";
import { Messaging_Copy_Qualifier, _decode_Messaging_Copy_Qualifier, _encode_Messaging_Copy_Qualifier, _enum_for_Messaging_Copy_Qualifier } from "../EmailPDU/Messaging-Copy-Qualifier.ta.mjs";
// export { Messaging_Copy_Qualifier, _enum_for_Messaging_Copy_Qualifier, Messaging_Copy_Qualifier_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, Messaging_Copy_Qualifier_none /* IMPORTED_LONG_ENUMERATION_ITEM */, none /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Copy_Qualifier_cc /* IMPORTED_LONG_ENUMERATION_ITEM */, cc /* IMPORTED_SHORT_ENUMERATION_ITEM */, Messaging_Copy_Qualifier_bcc /* IMPORTED_LONG_ENUMERATION_ITEM */, bcc /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_Messaging_Copy_Qualifier, _encode_Messaging_Copy_Qualifier } from "../EmailPDU/Messaging-Copy-Qualifier.ta.mjs";


/**
 * @summary Messaging_Party_Information
 * @description
 *
 * One party related to a unified-messaging event.
 *
 * `party_qualifier` says whether the party originated the event, terminated it,
 * is associated with it, or cannot be classified. `party_identity` is one of
 * the identities in table 7. `party_validity` says whether the CSP has assured
 * that identity; it does not mean the CSP identified a natural person.
 * `copy_qualifier` says whether the identity was directly addressed, carbon
 * copied, or blind carbon copied. Clause 8.6 does not define the individual
 * validity or copy-qualifier enumeration items.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Messaging-Party-Information ::= SEQUENCE
 * {
 *     party-qualifier     [0] Messaging-Party-Qualifier,
 *     party-identity      [1] Messaging-Party-Identity,
 *     ...,
 *     party-validity      [2] Messaging-Party-Validity OPTIONAL,
 *     copy-qualifier      [3] Messaging-Copy-Qualifier OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Messaging_Party_Information {
    /**
     * @summary `party_qualifier`.
     * @description
     *
     * Originating, terminating, associated, or unknown. Use the qualifier
     * together with an IP identity to tell the client side from the server side
     * (table 7).
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
     *
     * @public
     * @readonly
     */
    readonly party_qualifier: Messaging_Party_Qualifier;
    /**
     * @summary `party_identity`.
     * @description
     *
     * One identity from table 7: telephone number, email address, IP address,
     * mobile identity, or an alphanumeric identifier. Several identities of one
     * party are several elements of `MessagingIRI.party_information`, because
     * each element carries a single identity.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
     *
     * @public
     * @readonly
     */
    readonly party_identity: Messaging_Party_Identity;
    /**
     * @summary `party_validity`.
     * @description
     *
     * Whether the CSP has assured this party identity. Assurance does not mean
     * a natural person was identified (note 2). The individual values
     * `unknown`, `trusted`, and `untrusted` are not defined in clause 8.6.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
     *
     * @public
     * @readonly
     */
    readonly party_validity: OPTIONAL<Messaging_Party_Validity>;
    /**
     * @summary `copy_qualifier`.
     * @description
     *
     * Whether this party identity was directly addressed, carbon copied, or
     * blind carbon copied. Clause 8.6 does not say which enumeration item is
     * direct addressing.
     *
     * ETSI TS 102 232-2 V3.16.1 (2023-03), clause 8.6.
     *
     * @public
     * @readonly
     */
    readonly copy_qualifier: OPTIONAL<Messaging_Copy_Qualifier>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        party_qualifier: Messaging_Party_Qualifier,
        party_identity: Messaging_Party_Identity,
        party_validity?: OPTIONAL<Messaging_Party_Validity>,
        copy_qualifier?: OPTIONAL<Messaging_Copy_Qualifier>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.party_qualifier = party_qualifier;
        this.party_identity = party_identity;
        this.party_validity = party_validity;
        this.copy_qualifier = copy_qualifier;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a Messaging_Party_Information
     * @description
     * 
     * This takes an `object` and converts it to a `Messaging_Party_Information`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Messaging_Party_Information`.
     * @returns {Messaging_Party_Information}
     */
    public static _from_object (_o: { [_K in keyof (Messaging_Party_Information)]: (Messaging_Party_Information)[_K] }): Messaging_Party_Information {
        return new Messaging_Party_Information(_o.party_qualifier, _o.party_identity, _o.party_validity, _o.copy_qualifier, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `party_qualifier`
         * @public
         * @static
         */

    public static _enum_for_party_qualifier = _enum_for_Messaging_Party_Qualifier;        /**
         * @summary The enum used as the type of the component `party_validity`
         * @public
         * @static
         */

    public static _enum_for_party_validity = _enum_for_Messaging_Party_Validity;        /**
         * @summary The enum used as the type of the component `copy_qualifier`
         * @public
         * @static
         */

    public static _enum_for_copy_qualifier = _enum_for_Messaging_Copy_Qualifier;
}

/**
 * @summary The Leading Root Component Types of Messaging_Party_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Messaging_Party_Information: $.ComponentSpec[] = [
    new $.ComponentSpec("party-qualifier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("party-identity", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Messaging_Party_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Messaging_Party_Information: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Messaging_Party_Information
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Messaging_Party_Information: $.ComponentSpec[] = [
    new $.ComponentSpec("party-validity", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("copy-qualifier", true, $.hasTag(_TagClass.context, 3))
];

let _cached_decoder_for_Messaging_Party_Information: $.ASN1Decoder<Messaging_Party_Information> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Messaging_Party_Information
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Messaging_Party_Information (el: _Element): Messaging_Party_Information {
    if (!_cached_decoder_for_Messaging_Party_Information) { _cached_decoder_for_Messaging_Party_Information = function (el: _Element): Messaging_Party_Information {
    let party_qualifier!: Messaging_Party_Qualifier;
    let party_identity!: Messaging_Party_Identity;
    let party_validity: OPTIONAL<Messaging_Party_Validity>;
    let copy_qualifier: OPTIONAL<Messaging_Copy_Qualifier>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "party-qualifier": (_el: _Element): void => { party_qualifier = $._decode_implicit<Messaging_Party_Qualifier>(() => _decode_Messaging_Party_Qualifier)(_el); },
        "party-identity": (_el: _Element): void => { party_identity = $._decode_explicit<Messaging_Party_Identity>(() => _decode_Messaging_Party_Identity)(_el); },
        "party-validity": (_el: _Element): void => { party_validity = $._decode_implicit<Messaging_Party_Validity>(() => _decode_Messaging_Party_Validity)(_el); },
        "copy-qualifier": (_el: _Element): void => { copy_qualifier = $._decode_implicit<Messaging_Copy_Qualifier>(() => _decode_Messaging_Copy_Qualifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Messaging_Party_Information,
        _extension_additions_list_spec_for_Messaging_Party_Information,
        _root_component_type_list_2_spec_for_Messaging_Party_Information,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new Messaging_Party_Information(
        party_qualifier,
        party_identity,
        party_validity,
        copy_qualifier,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_Messaging_Party_Information(el);
}

let _cached_encoder_for_Messaging_Party_Information: $.ASN1Encoder<Messaging_Party_Information> | null = null;

/**
 * @summary Encodes a(n) Messaging_Party_Information into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Messaging_Party_Information, encoded as an ASN.1 Element.
 */
export
function _encode_Messaging_Party_Information (value: Messaging_Party_Information, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Messaging_Party_Information) { _cached_encoder_for_Messaging_Party_Information = function (value: Messaging_Party_Information, elGetter: $.ASN1Encoder<Messaging_Party_Information>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Messaging_Party_Qualifier, $.BER)(value.party_qualifier, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_Messaging_Party_Identity, $.BER)(value.party_identity, $.BER);
    if (value.party_validity !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Messaging_Party_Validity, $.BER)(value.party_validity, $.BER);
    }
    if (value.copy_qualifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Messaging_Copy_Qualifier, $.BER)(value.copy_qualifier, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Messaging_Party_Information(value, elGetter);
}


/* eslint-enable */
