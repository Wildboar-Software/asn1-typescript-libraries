/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiversionReason, _decode_DiversionReason, _encode_DiversionReason, _enum_for_DiversionReason } from "../Call-Diversion-Operations-asn1-97/DiversionReason.ta.mjs";
// export { DiversionReason, _enum_for_DiversionReason, DiversionReason_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, DiversionReason_cfu /* IMPORTED_LONG_ENUMERATION_ITEM */, cfu /* IMPORTED_SHORT_ENUMERATION_ITEM */, DiversionReason_cfb /* IMPORTED_LONG_ENUMERATION_ITEM */, cfb /* IMPORTED_SHORT_ENUMERATION_ITEM */, DiversionReason_cfnr /* IMPORTED_LONG_ENUMERATION_ITEM */, cfnr /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DiversionReason, _encode_DiversionReason } from "../Call-Diversion-Operations-asn1-97/DiversionReason.ta.mjs";
import { PresentedNumberUnscreened, _decode_PresentedNumberUnscreened, _encode_PresentedNumberUnscreened } from "../Addressing-Data-Elements-asn1-97/PresentedNumberUnscreened.ta.mjs";
// export { PresentedNumberUnscreened, _decode_PresentedNumberUnscreened, _encode_PresentedNumberUnscreened } from "../Addressing-Data-Elements-asn1-97/PresentedNumberUnscreened.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
// export { Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { _decode_divertingLegInformation2_ArgumentType_extension, _encode_divertingLegInformation2_ArgumentType_extension, divertingLegInformation2_ArgumentType_extension } from "../Call-Diversion-Operations-asn1-97/divertingLegInformation2-ArgumentType-extension.ta.mjs";
// export { divertingLegInformation2_ArgumentType_extension, _decode_divertingLegInformation2_ArgumentType_extension, _encode_divertingLegInformation2_ArgumentType_extension } from "../Call-Diversion-Operations-asn1-97/divertingLegInformation2-ArgumentType-extension.ta.mjs";


/**
 * @summary divertingLegInformation2_ArgumentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * divertingLegInformation2-ArgumentType ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class divertingLegInformation2_ArgumentType {
    /**
     * @summary `diversionCounter`.
     * @public
     * @readonly
     */
    readonly diversionCounter: INTEGER;
    /**
     * @summary `diversionReason`.
     * @public
     * @readonly
     */
    readonly diversionReason: DiversionReason;
    /**
     * @summary `originalDiversionReason`.
     * @public
     * @readonly
     */
    readonly originalDiversionReason: OPTIONAL<DiversionReason>;
    /**
     * @summary `divertingNr`.
     * @public
     * @readonly
     */
    readonly divertingNr: OPTIONAL<PresentedNumberUnscreened>;
    /**
     * @summary `originalCalledNr`.
     * @public
     * @readonly
     */
    readonly originalCalledNr: OPTIONAL<PresentedNumberUnscreened>;
    /**
     * @summary `redirectingName`.
     * @public
     * @readonly
     */
    readonly redirectingName: OPTIONAL<Name>;
    /**
     * @summary `originalCalledName`.
     * @public
     * @readonly
     */
    readonly originalCalledName: OPTIONAL<Name>;
    /**
     * @summary `extension`.
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<divertingLegInformation2_ArgumentType_extension>;

    constructor (
        diversionCounter: INTEGER,
        diversionReason: DiversionReason,
        originalDiversionReason: OPTIONAL<DiversionReason>,
        divertingNr: OPTIONAL<PresentedNumberUnscreened>,
        originalCalledNr: OPTIONAL<PresentedNumberUnscreened>,
        redirectingName: OPTIONAL<Name>,
        originalCalledName: OPTIONAL<Name>,
        extension: OPTIONAL<divertingLegInformation2_ArgumentType_extension>
    ) {
        this.diversionCounter = diversionCounter;
        this.diversionReason = diversionReason;
        this.originalDiversionReason = originalDiversionReason;
        this.divertingNr = divertingNr;
        this.originalCalledNr = originalCalledNr;
        this.redirectingName = redirectingName;
        this.originalCalledName = originalCalledName;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a divertingLegInformation2_ArgumentType
     * @description
     * 
     * This takes an `object` and converts it to a `divertingLegInformation2_ArgumentType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `divertingLegInformation2_ArgumentType`.
     * @returns {divertingLegInformation2_ArgumentType}
     */
    public static _from_object (_o: { [_K in keyof (divertingLegInformation2_ArgumentType)]: (divertingLegInformation2_ArgumentType)[_K] }): divertingLegInformation2_ArgumentType {
        return new divertingLegInformation2_ArgumentType(_o.diversionCounter, _o.diversionReason, _o.originalDiversionReason, _o.divertingNr, _o.originalCalledNr, _o.redirectingName, _o.originalCalledName, _o.extension);
    }

        /**
         * @summary The enum used as the type of the component `diversionReason`
         * @public
         * @static
         */

    public static _enum_for_diversionReason = _enum_for_DiversionReason;        /**
         * @summary The enum used as the type of the component `originalDiversionReason`
         * @public
         * @static
         */

    public static _enum_for_originalDiversionReason = _enum_for_DiversionReason;
}

/**
 * @summary The Leading Root Component Types of divertingLegInformation2_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_divertingLegInformation2_ArgumentType: $.ComponentSpec[] = [
    new $.ComponentSpec("diversionCounter", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("diversionReason", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("originalDiversionReason", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("divertingNr", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("originalCalledNr", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("redirectingName", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("originalCalledName", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.context, 5), $.hasTag(_TagClass.context, 6)))
];

/**
 * @summary The Trailing Root Component Types of divertingLegInformation2_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_divertingLegInformation2_ArgumentType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of divertingLegInformation2_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_divertingLegInformation2_ArgumentType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_divertingLegInformation2_ArgumentType: $.ASN1Decoder<divertingLegInformation2_ArgumentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) divertingLegInformation2_ArgumentType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_divertingLegInformation2_ArgumentType (el: _Element): divertingLegInformation2_ArgumentType {
    if (!_cached_decoder_for_divertingLegInformation2_ArgumentType) { _cached_decoder_for_divertingLegInformation2_ArgumentType = function (el: _Element): divertingLegInformation2_ArgumentType {
    let diversionCounter!: INTEGER;
    let diversionReason!: DiversionReason;
    let originalDiversionReason: OPTIONAL<DiversionReason>;
    let divertingNr: OPTIONAL<PresentedNumberUnscreened>;
    let originalCalledNr: OPTIONAL<PresentedNumberUnscreened>;
    let redirectingName: OPTIONAL<Name>;
    let originalCalledName: OPTIONAL<Name>;
    let extension: OPTIONAL<divertingLegInformation2_ArgumentType_extension>;
    const callbacks: $.DecodingMap = {
        "diversionCounter": (_el: _Element): void => { diversionCounter = $._decodeInteger(_el); },
        "diversionReason": (_el: _Element): void => { diversionReason = _decode_DiversionReason(_el); },
        "originalDiversionReason": (_el: _Element): void => { originalDiversionReason = $._decode_implicit<DiversionReason>(() => _decode_DiversionReason)(_el); },
        "divertingNr": (_el: _Element): void => { divertingNr = $._decode_explicit<PresentedNumberUnscreened>(() => _decode_PresentedNumberUnscreened)(_el); },
        "originalCalledNr": (_el: _Element): void => { originalCalledNr = $._decode_explicit<PresentedNumberUnscreened>(() => _decode_PresentedNumberUnscreened)(_el); },
        "redirectingName": (_el: _Element): void => { redirectingName = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "originalCalledName": (_el: _Element): void => { originalCalledName = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "extension": (_el: _Element): void => { extension = _decode_divertingLegInformation2_ArgumentType_extension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_divertingLegInformation2_ArgumentType,
        _extension_additions_list_spec_for_divertingLegInformation2_ArgumentType,
        _root_component_type_list_2_spec_for_divertingLegInformation2_ArgumentType,
        undefined,
    );
    return new divertingLegInformation2_ArgumentType(
        diversionCounter,
        diversionReason,
        originalDiversionReason,
        divertingNr,
        originalCalledNr,
        redirectingName,
        originalCalledName,
        extension
    );
}; }
    return _cached_decoder_for_divertingLegInformation2_ArgumentType(el);
}

let _cached_encoder_for_divertingLegInformation2_ArgumentType: $.ASN1Encoder<divertingLegInformation2_ArgumentType> | null = null;

/**
 * @summary Encodes a(n) divertingLegInformation2_ArgumentType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The divertingLegInformation2_ArgumentType, encoded as an ASN.1 Element.
 */
export
function _encode_divertingLegInformation2_ArgumentType (value: divertingLegInformation2_ArgumentType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_divertingLegInformation2_ArgumentType) { _cached_encoder_for_divertingLegInformation2_ArgumentType = function (value: divertingLegInformation2_ArgumentType, elGetter: $.ASN1Encoder<divertingLegInformation2_ArgumentType>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encodeInteger(value.diversionCounter, $.BER));
    _components.push(/* REQUIRED   */ _encode_DiversionReason(value.diversionReason, $.BER));
    if (value.originalDiversionReason !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_DiversionReason, $.BER)(value.originalDiversionReason, $.BER));
    }
    if (value.divertingNr !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_PresentedNumberUnscreened, $.BER)(value.divertingNr, $.BER));
    }
    if (value.originalCalledNr !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_PresentedNumberUnscreened, $.BER)(value.originalCalledNr, $.BER));
    }
    if (value.redirectingName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_Name, $.BER)(value.redirectingName, $.BER));
    }
    if (value.originalCalledName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_Name, $.BER)(value.originalCalledName, $.BER));
    }
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_divertingLegInformation2_ArgumentType_extension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_divertingLegInformation2_ArgumentType(value, elGetter);
}


/* eslint-enable */
