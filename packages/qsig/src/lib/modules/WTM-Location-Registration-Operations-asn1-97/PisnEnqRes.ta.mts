/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { WtmUserId, _decode_WtmUserId, _encode_WtmUserId } from "../WTM-Location-Registration-Operations-asn1-97/WtmUserId.ta.mjs";
import { LrExtension, _decode_LrExtension, _encode_LrExtension } from "../WTM-Location-Registration-Operations-asn1-97/LrExtension.ta.mjs";

/**
 * @summary PisnEnqRes
 * @description
 *
 * Identity returned by `pisnEnquiry` (ECMA-302 §6.5.7, §6.5.8). The Visitor
 * PINX may then use it in `locUpdate`. ECMA-282 §6.8.2.1 requires the PUM
 * user's PISN number in this result when the enquiry is a PUM directory lookup.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-302/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-282/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PisnEnqRes ::= SEQUENCE {
 *     wtmUserId WtmUserId,
 *     resExtension LrExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class PisnEnqRes {
    /**
     * @summary `wtmUserId`.
     * @description
     *
     * Identity found in the VDB or produced by the Directory PINX (ECMA-302
     * §6.5.7.1, §6.5.8.1). For an ECMA-282 directory enquiry, §6.8.2.1 requires
     * the PUM user's PISN number and is silent on which alternative carries it.
     *
     * @public
     * @readonly
     */
    readonly wtmUserId: WtmUserId;
    /**
     * @summary `resExtension`.
     * @description
     *
     * Manufacturer-specific data. ECMA-302 §6.3.1 names this element and is
     * silent on its contents. `WTMLRExtSet` assigns no extensions.
     *
     * @public
     * @readonly
     */
    readonly resExtension: OPTIONAL<LrExtension>;

    constructor (
        wtmUserId: WtmUserId,
        resExtension: OPTIONAL<LrExtension>
    ) {
        this.wtmUserId = wtmUserId;
        this.resExtension = resExtension;
    }

    /**
     * @summary Restructures an object into a PisnEnqRes
     * @description
     * 
     * This takes an `object` and converts it to a `PisnEnqRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PisnEnqRes`.
     * @returns {PisnEnqRes}
     */
    public static _from_object (_o: { [_K in keyof (PisnEnqRes)]: (PisnEnqRes)[_K] }): PisnEnqRes {
        return new PisnEnqRes(_o.wtmUserId, _o.resExtension);
    }

}

/**
 * @summary The Leading Root Component Types of PisnEnqRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PisnEnqRes: $.ComponentSpec[] = [
    new $.ComponentSpec("wtmUserId", false, $.hasAnyTag),
    new $.ComponentSpec("resExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of PisnEnqRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PisnEnqRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PisnEnqRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PisnEnqRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PisnEnqRes: $.ASN1Decoder<PisnEnqRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PisnEnqRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PisnEnqRes (el: _Element): PisnEnqRes {
    if (!_cached_decoder_for_PisnEnqRes) { _cached_decoder_for_PisnEnqRes = function (el: _Element): PisnEnqRes {
    let wtmUserId!: WtmUserId;
    let resExtension: OPTIONAL<LrExtension>;
    const callbacks: $.DecodingMap = {
        "wtmUserId": (_el: _Element): void => { wtmUserId = _decode_WtmUserId(_el); },
        "resExtension": (_el: _Element): void => { resExtension = _decode_LrExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PisnEnqRes,
        _extension_additions_list_spec_for_PisnEnqRes,
        _root_component_type_list_2_spec_for_PisnEnqRes,
        undefined,
    );
    return new PisnEnqRes(
        wtmUserId,
        resExtension
    );
}; }
    return _cached_decoder_for_PisnEnqRes(el);
}

let _cached_encoder_for_PisnEnqRes: $.ASN1Encoder<PisnEnqRes> | null = null;

/**
 * @summary Encodes a(n) PisnEnqRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PisnEnqRes, encoded as an ASN.1 Element.
 */
export
function _encode_PisnEnqRes (value: PisnEnqRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PisnEnqRes) { _cached_encoder_for_PisnEnqRes = function (value: PisnEnqRes, _elGetter: $.ASN1Encoder<PisnEnqRes>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_WtmUserId(value.wtmUserId, $.BER));
    if (value.resExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_LrExtension(value.resExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PisnEnqRes(value, elGetter);
}

/* eslint-enable */
