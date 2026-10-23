/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PresentationAllowedIndicator, _decode_PresentationAllowedIndicator, _encode_PresentationAllowedIndicator } from "../Addressing-Data-Elements-asn1-97/PresentationAllowedIndicator.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { _decode_divertingLegInformation3_ArgumentType_extension, _encode_divertingLegInformation3_ArgumentType_extension, divertingLegInformation3_ArgumentType_extension } from "../Call-Diversion-Operations-asn1-97/divertingLegInformation3-ArgumentType-extension.ta.mjs";

/**
 * @summary divertingLegInformation3_ArgumentType
 * @description
 *
 * Argument of `divertingLegInformation3`, from the Diverted-to PINX to the
 * Originating PINX (ECMA-174 §6.3.1, §6.5.5.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * divertingLegInformation3-ArgumentType ::= SEQUENCE {
 *     presentationAllowedIndicator PresentationAllowedIndicator,
 *     redirectionName [0] Name OPTIONAL,
 *     extension CHOICE {
 *         single [1] IMPLICIT Extension {{DiversionExtensionSet}},
 *         multiple [2] IMPLICIT SEQUENCE OF Extension {{DiversionExtensionSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class divertingLegInformation3_ArgumentType {
    /**
     * @summary `presentationAllowedIndicator`.
     * @description
     *
     * Whether the diverted-to number may be presented to the calling user,
     * derived from the diverted-to user's CLIR (ECMA-174 §4.2.18, §6.5.5.1.1).
     * Presentation also requires `notificationWithDivertedToNr` on every
     * `divertingLegInformation1` for the call, and no earlier presentation of a
     * diverted-to number unless a later `cfnr` reason was received (§6.5.1.1).
     * The procedure requires the value that allows presentation, written there
     * as TRUE.
     * @public
     * @readonly
     */
    readonly presentationAllowedIndicator: PresentationAllowedIndicator;
    /**
     * @summary `redirectionName`.
     * @description
     *
     * Name of the diverted-to user. It may also mark that name as presentation
     * restricted (ECMA-174 §6.5.5.1.1). The Originating PINX may present it
     * only when the diverted-to number may be presented and the name is not
     * restricted (§6.5.1.1).
     * @public
     * @readonly
     */
    readonly redirectionName: OPTIONAL<Name>;
    /**
     * @summary `extension`.
     * @description
     *
     * Manufacturer-specific extension from `DiversionExtensionSet`. The
     * standardized set is empty (ECMA-174 §6.3.1).
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<divertingLegInformation3_ArgumentType_extension>;

    constructor (
        presentationAllowedIndicator: PresentationAllowedIndicator,
        redirectionName: OPTIONAL<Name>,
        extension: OPTIONAL<divertingLegInformation3_ArgumentType_extension>
    ) {
        this.presentationAllowedIndicator = presentationAllowedIndicator;
        this.redirectionName = redirectionName;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a divertingLegInformation3_ArgumentType
     * @description
     * 
     * This takes an `object` and converts it to a `divertingLegInformation3_ArgumentType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `divertingLegInformation3_ArgumentType`.
     * @returns {divertingLegInformation3_ArgumentType}
     */
    public static _from_object (_o: { [_K in keyof (divertingLegInformation3_ArgumentType)]: (divertingLegInformation3_ArgumentType)[_K] }): divertingLegInformation3_ArgumentType {
        return new divertingLegInformation3_ArgumentType(_o.presentationAllowedIndicator, _o.redirectionName, _o.extension);
    }

}

/**
 * @summary The Leading Root Component Types of divertingLegInformation3_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_divertingLegInformation3_ArgumentType: $.ComponentSpec[] = [
    new $.ComponentSpec("presentationAllowedIndicator", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("redirectionName", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of divertingLegInformation3_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_divertingLegInformation3_ArgumentType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of divertingLegInformation3_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_divertingLegInformation3_ArgumentType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_divertingLegInformation3_ArgumentType: $.ASN1Decoder<divertingLegInformation3_ArgumentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) divertingLegInformation3_ArgumentType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_divertingLegInformation3_ArgumentType (el: _Element): divertingLegInformation3_ArgumentType {
    if (!_cached_decoder_for_divertingLegInformation3_ArgumentType) { _cached_decoder_for_divertingLegInformation3_ArgumentType = function (el: _Element): divertingLegInformation3_ArgumentType {
    let presentationAllowedIndicator!: PresentationAllowedIndicator;
    let redirectionName: OPTIONAL<Name>;
    let extension: OPTIONAL<divertingLegInformation3_ArgumentType_extension>;
    const callbacks: $.DecodingMap = {
        "presentationAllowedIndicator": (_el: _Element): void => { presentationAllowedIndicator = _decode_PresentationAllowedIndicator(_el); },
        "redirectionName": (_el: _Element): void => { redirectionName = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "extension": (_el: _Element): void => { extension = _decode_divertingLegInformation3_ArgumentType_extension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_divertingLegInformation3_ArgumentType,
        _extension_additions_list_spec_for_divertingLegInformation3_ArgumentType,
        _root_component_type_list_2_spec_for_divertingLegInformation3_ArgumentType,
        undefined,
    );
    return new divertingLegInformation3_ArgumentType(
        presentationAllowedIndicator,
        redirectionName,
        extension
    );
}; }
    return _cached_decoder_for_divertingLegInformation3_ArgumentType(el);
}

let _cached_encoder_for_divertingLegInformation3_ArgumentType: $.ASN1Encoder<divertingLegInformation3_ArgumentType> | null = null;

/**
 * @summary Encodes a(n) divertingLegInformation3_ArgumentType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The divertingLegInformation3_ArgumentType, encoded as an ASN.1 Element.
 */
export
function _encode_divertingLegInformation3_ArgumentType (value: divertingLegInformation3_ArgumentType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_divertingLegInformation3_ArgumentType) { _cached_encoder_for_divertingLegInformation3_ArgumentType = function (value: divertingLegInformation3_ArgumentType, _elGetter: $.ASN1Encoder<divertingLegInformation3_ArgumentType>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PresentationAllowedIndicator(value.presentationAllowedIndicator, $.BER));
    if (value.redirectionName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_Name, $.BER)(value.redirectionName, $.BER));
    }
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_divertingLegInformation3_ArgumentType_extension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_divertingLegInformation3_ArgumentType(value, elGetter);
}

/* eslint-enable */
