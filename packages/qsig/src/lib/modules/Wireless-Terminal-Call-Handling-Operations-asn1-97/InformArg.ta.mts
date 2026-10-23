/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { WtmIdentity, _decode_WtmIdentity, _encode_WtmIdentity } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/WtmIdentity.ta.mjs";
import { WtmiExtension, _decode_WtmiExtension, _encode_WtmiExtension } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/WtmiExtension.ta.mjs";

/**
 * @summary InformArg
 * @description
 *
 * Argument of `wtmiInform` (ECMA-304 §6.5.1.1, §6.5.4). Identifies the visiting
 * user to the Visitor PINX.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-304/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InformArg ::= SEQUENCE {
 *     wtmIdentity WtmIdentity,
 *     -- The PISN number (always a Complete Number)
 *     -- and/or an alternative identifier of the WTMI user.
 *     argExtension WtmiExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class InformArg {
    /**
     * @summary `wtmIdentity`.
     * @description
     *
     * Same contents as `wtmIdentity` in the `wtmiDivert` that caused this SETUP
     * (ECMA-304 §6.5.1.1). The Visitor PINX searches the VDB with the PISN
     * number or the alternative identifier (§6.5.4.1).
     * @public
     * @readonly
     */
    readonly wtmIdentity: WtmIdentity;
    /**
     * @summary `argExtension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-304 §6.3.1 defines no members of
     * `WTMCHExtSet`.
     * @public
     * @readonly
     */
    readonly argExtension: OPTIONAL<WtmiExtension>;

    constructor (
        wtmIdentity: WtmIdentity,
        argExtension: OPTIONAL<WtmiExtension>
    ) {
        this.wtmIdentity = wtmIdentity;
        this.argExtension = argExtension;
    }

    /**
     * @summary Restructures an object into a InformArg
     * @description
     * 
     * This takes an `object` and converts it to a `InformArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InformArg`.
     * @returns {InformArg}
     */
    public static _from_object (_o: { [_K in keyof (InformArg)]: (InformArg)[_K] }): InformArg {
        return new InformArg(_o.wtmIdentity, _o.argExtension);
    }

}

/**
 * @summary The Leading Root Component Types of InformArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InformArg: $.ComponentSpec[] = [
    new $.ComponentSpec("wtmIdentity", false, $.hasAnyTag),
    new $.ComponentSpec("argExtension", true, $.or($.hasTag(_TagClass.context, 4), $.hasTag(_TagClass.context, 5)))
];

/**
 * @summary The Trailing Root Component Types of InformArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InformArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InformArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InformArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InformArg: $.ASN1Decoder<InformArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InformArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InformArg (el: _Element): InformArg {
    if (!_cached_decoder_for_InformArg) { _cached_decoder_for_InformArg = function (el: _Element): InformArg {
    let wtmIdentity!: WtmIdentity;
    let argExtension: OPTIONAL<WtmiExtension>;
    const callbacks: $.DecodingMap = {
        "wtmIdentity": (_el: _Element): void => { wtmIdentity = _decode_WtmIdentity(_el); },
        "argExtension": (_el: _Element): void => { argExtension = _decode_WtmiExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InformArg,
        _extension_additions_list_spec_for_InformArg,
        _root_component_type_list_2_spec_for_InformArg,
        undefined,
    );
    return new InformArg(
        wtmIdentity,
        argExtension
    );
}; }
    return _cached_decoder_for_InformArg(el);
}

let _cached_encoder_for_InformArg: $.ASN1Encoder<InformArg> | null = null;

/**
 * @summary Encodes a(n) InformArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformArg, encoded as an ASN.1 Element.
 */
export
function _encode_InformArg (value: InformArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InformArg) { _cached_encoder_for_InformArg = function (value: InformArg, _elGetter: $.ASN1Encoder<InformArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_WtmIdentity(value.wtmIdentity, $.BER));
    if (value.argExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_WtmiExtension(value.argExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_InformArg(value, elGetter);
}

/* eslint-enable */
