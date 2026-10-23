/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartySubaddress, _decode_PartySubaddress, _encode_PartySubaddress } from "../Addressing-Data-Elements-asn1-97/PartySubaddress.ta.mjs";
import { SubaddressTransferArg_argumentExtension, _decode_SubaddressTransferArg_argumentExtension, _encode_SubaddressTransferArg_argumentExtension } from "../Call-Transfer-Operations-asn1-97/SubaddressTransferArg-argumentExtension.ta.mjs";

/**
 * @summary SubaddressTransferArg
 * @description
 *
 * Argument of `subaddressTransfer`. Carries one user's subaddress to
 * the other user after transfer. ECMA-178 §6.5.5; ECMA-177 §7.2.1.5.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-178/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-177/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubaddressTransferArg ::= SEQUENCE {
 *     redirectionSubaddress PartySubaddress,
 *     argumentExtension CHOICE {
 *         single [0] IMPLICIT Extension {{CTExtSet}},
 *         multiple [1] IMPLICIT SEQUENCE OF Extension {{CTExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SubaddressTransferArg {
    /**
     * @summary `redirectionSubaddress`.
     * @description
     *
     * Subaddress to present to the other transferred user.
     * ECMA-178 §6.5.5. Gateway procedures call this element
     * `connectedSubaddress`; the ASN.1 name is
     * `redirectionSubaddress` (§6.6.1.1, §6.7.1.2).
     * @public
     * @readonly
     */
    readonly redirectionSubaddress: PartySubaddress;
    /**
     * @summary `argumentExtension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-178 §6.3.1 defines no
     * member of `CTExtSet`.
     * @public
     * @readonly
     */
    readonly argumentExtension: OPTIONAL<SubaddressTransferArg_argumentExtension>;

    constructor (
        redirectionSubaddress: PartySubaddress,
        argumentExtension: OPTIONAL<SubaddressTransferArg_argumentExtension>
    ) {
        this.redirectionSubaddress = redirectionSubaddress;
        this.argumentExtension = argumentExtension;
    }

    /**
     * @summary Restructures an object into a SubaddressTransferArg
     * @description
     * 
     * This takes an `object` and converts it to a `SubaddressTransferArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubaddressTransferArg`.
     * @returns {SubaddressTransferArg}
     */
    public static _from_object (_o: { [_K in keyof (SubaddressTransferArg)]: (SubaddressTransferArg)[_K] }): SubaddressTransferArg {
        return new SubaddressTransferArg(_o.redirectionSubaddress, _o.argumentExtension);
    }

}

/**
 * @summary The Leading Root Component Types of SubaddressTransferArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SubaddressTransferArg: $.ComponentSpec[] = [
    new $.ComponentSpec("redirectionSubaddress", false, $.hasAnyTag),
    new $.ComponentSpec("argumentExtension", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1)))
];

/**
 * @summary The Trailing Root Component Types of SubaddressTransferArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SubaddressTransferArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SubaddressTransferArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SubaddressTransferArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SubaddressTransferArg: $.ASN1Decoder<SubaddressTransferArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubaddressTransferArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubaddressTransferArg (el: _Element): SubaddressTransferArg {
    if (!_cached_decoder_for_SubaddressTransferArg) { _cached_decoder_for_SubaddressTransferArg = function (el: _Element): SubaddressTransferArg {
    let redirectionSubaddress!: PartySubaddress;
    let argumentExtension: OPTIONAL<SubaddressTransferArg_argumentExtension>;
    const callbacks: $.DecodingMap = {
        "redirectionSubaddress": (_el: _Element): void => { redirectionSubaddress = _decode_PartySubaddress(_el); },
        "argumentExtension": (_el: _Element): void => { argumentExtension = _decode_SubaddressTransferArg_argumentExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SubaddressTransferArg,
        _extension_additions_list_spec_for_SubaddressTransferArg,
        _root_component_type_list_2_spec_for_SubaddressTransferArg,
        undefined,
    );
    return new SubaddressTransferArg(
        redirectionSubaddress,
        argumentExtension
    );
}; }
    return _cached_decoder_for_SubaddressTransferArg(el);
}

let _cached_encoder_for_SubaddressTransferArg: $.ASN1Encoder<SubaddressTransferArg> | null = null;

/**
 * @summary Encodes a(n) SubaddressTransferArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubaddressTransferArg, encoded as an ASN.1 Element.
 */
export
function _encode_SubaddressTransferArg (value: SubaddressTransferArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubaddressTransferArg) { _cached_encoder_for_SubaddressTransferArg = function (value: SubaddressTransferArg, _elGetter: $.ASN1Encoder<SubaddressTransferArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartySubaddress(value.redirectionSubaddress, $.BER));
    if (value.argumentExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_SubaddressTransferArg_argumentExtension(value.argumentExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SubaddressTransferArg(value, elGetter);
}

/* eslint-enable */
