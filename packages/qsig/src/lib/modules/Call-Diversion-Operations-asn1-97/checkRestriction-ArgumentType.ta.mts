/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { BasicService, _decode_BasicService, _encode_BasicService, _enum_for_BasicService } from "../Call-Diversion-Operations-asn1-97/BasicService.ta.mjs";
import { _decode_checkRestriction_ArgumentType_extension, _encode_checkRestriction_ArgumentType_extension, checkRestriction_ArgumentType_extension } from "../Call-Diversion-Operations-asn1-97/checkRestriction-ArgumentType-extension.ta.mjs";

/**
 * @summary checkRestriction_ArgumentType
 * @description
 *
 * Argument of `checkRestriction`, from the Served User PINX to the Diverted-to
 * PINX (ECMA-174 §6.3.1, §6.5.3.1.4).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-174/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * checkRestriction-ArgumentType ::= SEQUENCE {
 *     servedUserNr PartyNumber,
 *     basicService BasicService,
 *     divertedToNr PartyNumber,
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
class checkRestriction_ArgumentType {
    /**
     * @summary `servedUserNr`.
     * @description
     *
     * Served user from whom diversion to `divertedToNr` is proposed (ECMA-174
     * §6.5.5.1.2).
     * @public
     * @readonly
     */
    readonly servedUserNr: PartyNumber;
    /**
     * @summary `basicService`.
     * @description
     *
     * Basic service checked for a restriction that would prevent diversion
     * (ECMA-174 §6.5.5.1.2).
     * @public
     * @readonly
     */
    readonly basicService: BasicService;
    /**
     * @summary `divertedToNr`.
     * @description
     *
     * Number of the intended diverted-to user. The Diverted-to PINX checks that
     * this number exists (ECMA-174 §6.5.5.1.2).
     * @public
     * @readonly
     */
    readonly divertedToNr: PartyNumber;
    /**
     * @summary `extension`.
     * @description
     *
     * Manufacturer-specific extension from `DiversionExtensionSet`. The
     * standardized set is empty (ECMA-174 §6.3.1).
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<checkRestriction_ArgumentType_extension>;

    constructor (
        servedUserNr: PartyNumber,
        basicService: BasicService,
        divertedToNr: PartyNumber,
        extension?: OPTIONAL<checkRestriction_ArgumentType_extension>
    ) {
        this.servedUserNr = servedUserNr;
        this.basicService = basicService;
        this.divertedToNr = divertedToNr;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a checkRestriction_ArgumentType
     * @description
     * 
     * This takes an `object` and converts it to a `checkRestriction_ArgumentType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `checkRestriction_ArgumentType`.
     * @returns {checkRestriction_ArgumentType}
     */
    public static _from_object (_o: { [_K in keyof (checkRestriction_ArgumentType)]: (checkRestriction_ArgumentType)[_K] }): checkRestriction_ArgumentType {
        return new checkRestriction_ArgumentType(_o.servedUserNr, _o.basicService, _o.divertedToNr, _o.extension);
    }

        /**
         * @summary The enum used as the type of the component `basicService`
         * @public
         * @static
         */

    public static _enum_for_basicService = _enum_for_BasicService;
}

/**
 * @summary The Leading Root Component Types of checkRestriction_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_checkRestriction_ArgumentType: $.ComponentSpec[] = [
    new $.ComponentSpec("servedUserNr", false, $.hasAnyTag),
    new $.ComponentSpec("basicService", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("divertedToNr", false, $.hasAnyTag),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of checkRestriction_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_checkRestriction_ArgumentType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of checkRestriction_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_checkRestriction_ArgumentType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_checkRestriction_ArgumentType: $.ASN1Decoder<checkRestriction_ArgumentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) checkRestriction_ArgumentType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_checkRestriction_ArgumentType (el: _Element): checkRestriction_ArgumentType {
    if (!_cached_decoder_for_checkRestriction_ArgumentType) { _cached_decoder_for_checkRestriction_ArgumentType = function (el: _Element): checkRestriction_ArgumentType {
    let servedUserNr!: PartyNumber;
    let basicService!: BasicService;
    let divertedToNr!: PartyNumber;
    let extension: OPTIONAL<checkRestriction_ArgumentType_extension>;
    const callbacks: $.DecodingMap = {
        "servedUserNr": (_el: _Element): void => { servedUserNr = _decode_PartyNumber(_el); },
        "basicService": (_el: _Element): void => { basicService = _decode_BasicService(_el); },
        "divertedToNr": (_el: _Element): void => { divertedToNr = _decode_PartyNumber(_el); },
        "extension": (_el: _Element): void => { extension = _decode_checkRestriction_ArgumentType_extension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_checkRestriction_ArgumentType,
        _extension_additions_list_spec_for_checkRestriction_ArgumentType,
        _root_component_type_list_2_spec_for_checkRestriction_ArgumentType,
        undefined,
    );
    return new checkRestriction_ArgumentType(
        servedUserNr,
        basicService,
        divertedToNr,
        extension
    );
}; }
    return _cached_decoder_for_checkRestriction_ArgumentType(el);
}

let _cached_encoder_for_checkRestriction_ArgumentType: $.ASN1Encoder<checkRestriction_ArgumentType> | null = null;

/**
 * @summary Encodes a(n) checkRestriction_ArgumentType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The checkRestriction_ArgumentType, encoded as an ASN.1 Element.
 */
export
function _encode_checkRestriction_ArgumentType (value: checkRestriction_ArgumentType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_checkRestriction_ArgumentType) { _cached_encoder_for_checkRestriction_ArgumentType = function (value: checkRestriction_ArgumentType, _elGetter: $.ASN1Encoder<checkRestriction_ArgumentType>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.servedUserNr, $.BER));
    _components.push(/* REQUIRED   */ _encode_BasicService(value.basicService, $.BER));
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.divertedToNr, $.BER));
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_checkRestriction_ArgumentType_extension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_checkRestriction_ArgumentType(value, elGetter);
}

/* eslint-enable */
