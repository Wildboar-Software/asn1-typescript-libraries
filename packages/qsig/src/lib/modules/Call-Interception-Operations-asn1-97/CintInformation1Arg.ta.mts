/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CintCause, _decode_CintCause, _encode_CintCause } from "../Call-Interception-Operations-asn1-97/CintCause.ta.mjs";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { CintExtension, _decode_CintExtension, _encode_CintExtension } from "../Call-Interception-Operations-asn1-97/CintExtension.ta.mjs";

/**
 * @summary CintInformation1Arg
 * @description
 *
 * What the Originating PINX is told about an interception
 * (ECMA-221 §6.6.3, §6.6.4.1). The calling user may be told the
 * cause. The intercepted-to number in this argument is not presented
 * until `divertingLegInformation3` allows it.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-220/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CintInformation1Arg ::= SEQUENCE {
 *     interceptionCause CintCause,
 *     interceptedToNumber PartyNumber,
 *     extension CintExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CintInformation1Arg {
    /**
     * @summary `interceptionCause`.
     * @description
     *
     * Why the call was intercepted (ECMA-220 §6.2.2.2.2). On a
     * further interception the cause from that later invoke is not
     * the one forwarded to the Originating PINX (ECMA-221 §6.6.5.1).
     * @public
     * @readonly
     */
    readonly interceptionCause: CintCause;
    /**
     * @summary `interceptedToNumber`.
     * @description
     *
     * PISN number of the intercepted-to user (ECMA-220 §6.2.1). The
     * Originating PINX shall not present it until
     * `divertingLegInformation3` in the same call has
     * `presentationIndicator` TRUE (ECMA-221 §6.6.3). For multiple
     * interception the number sent toward the calling user is the
     * latest intercepted-to number (§6.6.5.1).
     * @public
     * @readonly
     */
    readonly interceptedToNumber: PartyNumber;
    /**
     * @summary `extension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-221 §6.3.1 leaves
     * `CINTExtSet` empty.
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<CintExtension>;

    constructor (
        interceptionCause: CintCause,
        interceptedToNumber: PartyNumber,
        extension?: OPTIONAL<CintExtension>
    ) {
        this.interceptionCause = interceptionCause;
        this.interceptedToNumber = interceptedToNumber;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a CintInformation1Arg
     * @description
     * 
     * This takes an `object` and converts it to a `CintInformation1Arg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CintInformation1Arg`.
     * @returns {CintInformation1Arg}
     */
    public static _from_object (_o: { [_K in keyof (CintInformation1Arg)]: (CintInformation1Arg)[_K] }): CintInformation1Arg {
        return new CintInformation1Arg(_o.interceptionCause, _o.interceptedToNumber, _o.extension);
    }

}

/**
 * @summary The Leading Root Component Types of CintInformation1Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CintInformation1Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("interceptionCause", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("interceptedToNumber", false, $.hasAnyTag),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.universal, 5), $.hasTag(_TagClass.context, 5), $.hasTag(_TagClass.context, 6)))
];

/**
 * @summary The Trailing Root Component Types of CintInformation1Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CintInformation1Arg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CintInformation1Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CintInformation1Arg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CintInformation1Arg: $.ASN1Decoder<CintInformation1Arg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CintInformation1Arg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CintInformation1Arg (el: _Element): CintInformation1Arg {
    if (!_cached_decoder_for_CintInformation1Arg) { _cached_decoder_for_CintInformation1Arg = function (el: _Element): CintInformation1Arg {
    let interceptionCause!: CintCause;
    let interceptedToNumber!: PartyNumber;
    let extension: OPTIONAL<CintExtension>;
    const callbacks: $.DecodingMap = {
        "interceptionCause": (_el: _Element): void => { interceptionCause = _decode_CintCause(_el); },
        "interceptedToNumber": (_el: _Element): void => { interceptedToNumber = _decode_PartyNumber(_el); },
        "extension": (_el: _Element): void => { extension = _decode_CintExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CintInformation1Arg,
        _extension_additions_list_spec_for_CintInformation1Arg,
        _root_component_type_list_2_spec_for_CintInformation1Arg,
        undefined,
    );
    return new CintInformation1Arg(
        interceptionCause,
        interceptedToNumber,
        extension
    );
}; }
    return _cached_decoder_for_CintInformation1Arg(el);
}

let _cached_encoder_for_CintInformation1Arg: $.ASN1Encoder<CintInformation1Arg> | null = null;

/**
 * @summary Encodes a(n) CintInformation1Arg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CintInformation1Arg, encoded as an ASN.1 Element.
 */
export
function _encode_CintInformation1Arg (value: CintInformation1Arg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CintInformation1Arg) { _cached_encoder_for_CintInformation1Arg = function (value: CintInformation1Arg, _elGetter: $.ASN1Encoder<CintInformation1Arg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_CintCause(value.interceptionCause, $.BER));
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.interceptedToNumber, $.BER));
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CintExtension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CintInformation1Arg(value, elGetter);
}

/* eslint-enable */
