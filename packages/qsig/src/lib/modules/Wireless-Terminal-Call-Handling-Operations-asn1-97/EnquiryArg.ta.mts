/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { PSS1InformationElement, _decode_PSS1InformationElement, _encode_PSS1InformationElement } from "../PSS1-generic-parameters-definition-asn1-97/PSS1InformationElement.ta.mjs";
import { WtmiExtension, _decode_WtmiExtension, _encode_WtmiExtension } from "../Wireless-Terminal-Call-Handling-Operations-asn1-97/WtmiExtension.ta.mjs";

/**
 * @summary EnquiryArg
 * @description
 *
 * Argument of `wtmiEnquiry` (ECMA-304 §6.5.2.1). Identifies the called WTMI
 * user and the basic service of the incoming call.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-304/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnquiryArg ::= SEQUENCE {
 *     pisnNumber PartyNumber,
 *     -- The PISN number of the WTMI user
 *     qSIGInfoElement PSS1InformationElement,
 *     -- The basic call information elements Bearer capability, High layer compatibility,
 *     -- Low layer compatibility can be embedded in the qSIGInfoElement
 *     -- in accordance with clause 6.5.2.1.
 *     argExtension WtmiExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EnquiryArg {
    /**
     * @summary `pisnNumber`.
     * @description
     *
     * PISN number of the called WTMI user, from the Called party number of the
     * incoming SETUP (ECMA-304 §6.5.2.1). The number used to reach the Home
     * PINX on the call-independent connection is outside this standard.
     * @public
     * @readonly
     */
    readonly pisnNumber: PartyNumber;
    /**
     * @summary `qSIGInfoElement`.
     * @description
     *
     * Embedded bearer capability from the incoming SETUP, plus high-layer and
     * low-layer compatibility when those were received (ECMA-304 §6.5.2.1). The
     * Home PINX uses them to check that the basic service is provided
     * (§6.5.3.1).
     * @public
     * @readonly
     */
    readonly qSIGInfoElement: PSS1InformationElement;
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
        pisnNumber: PartyNumber,
        qSIGInfoElement: PSS1InformationElement,
        argExtension?: OPTIONAL<WtmiExtension>
    ) {
        this.pisnNumber = pisnNumber;
        this.qSIGInfoElement = qSIGInfoElement;
        this.argExtension = argExtension;
    }

    /**
     * @summary Restructures an object into a EnquiryArg
     * @description
     * 
     * This takes an `object` and converts it to a `EnquiryArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EnquiryArg`.
     * @returns {EnquiryArg}
     */
    public static _from_object (_o: { [_K in keyof (EnquiryArg)]: (EnquiryArg)[_K] }): EnquiryArg {
        return new EnquiryArg(_o.pisnNumber, _o.qSIGInfoElement, _o.argExtension);
    }

}

/**
 * @summary The Leading Root Component Types of EnquiryArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EnquiryArg: $.ComponentSpec[] = [
    new $.ComponentSpec("pisnNumber", false, $.hasAnyTag),
    new $.ComponentSpec("qSIGInfoElement", false, $.hasTag(_TagClass.application, 0)),
    new $.ComponentSpec("argExtension", true, $.or($.hasTag(_TagClass.context, 4), $.hasTag(_TagClass.context, 5)))
];

/**
 * @summary The Trailing Root Component Types of EnquiryArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EnquiryArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EnquiryArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EnquiryArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EnquiryArg: $.ASN1Decoder<EnquiryArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EnquiryArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EnquiryArg (el: _Element): EnquiryArg {
    if (!_cached_decoder_for_EnquiryArg) { _cached_decoder_for_EnquiryArg = function (el: _Element): EnquiryArg {
    let pisnNumber!: PartyNumber;
    let qSIGInfoElement!: PSS1InformationElement;
    let argExtension: OPTIONAL<WtmiExtension>;
    const callbacks: $.DecodingMap = {
        "pisnNumber": (_el: _Element): void => { pisnNumber = _decode_PartyNumber(_el); },
        "qSIGInfoElement": (_el: _Element): void => { qSIGInfoElement = _decode_PSS1InformationElement(_el); },
        "argExtension": (_el: _Element): void => { argExtension = _decode_WtmiExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EnquiryArg,
        _extension_additions_list_spec_for_EnquiryArg,
        _root_component_type_list_2_spec_for_EnquiryArg,
        undefined,
    );
    return new EnquiryArg(
        pisnNumber,
        qSIGInfoElement,
        argExtension
    );
}; }
    return _cached_decoder_for_EnquiryArg(el);
}

let _cached_encoder_for_EnquiryArg: $.ASN1Encoder<EnquiryArg> | null = null;

/**
 * @summary Encodes a(n) EnquiryArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnquiryArg, encoded as an ASN.1 Element.
 */
export
function _encode_EnquiryArg (value: EnquiryArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EnquiryArg) { _cached_encoder_for_EnquiryArg = function (value: EnquiryArg, _elGetter: $.ASN1Encoder<EnquiryArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.pisnNumber, $.BER));
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.application, 0, () => _encode_PSS1InformationElement, $.BER)(value.qSIGInfoElement, $.BER));
    if (value.argExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_WtmiExtension(value.argExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EnquiryArg(value, elGetter);
}

/* eslint-enable */
