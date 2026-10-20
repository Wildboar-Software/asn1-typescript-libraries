/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Condition, _decode_Condition, _encode_Condition } from "../Call-Interception-Operations-asn1-97/Condition.ta.mjs";
import { PresentedNumberUnscreened, _decode_PresentedNumberUnscreened, _encode_PresentedNumberUnscreened } from "../Addressing-Data-Elements-asn1-97/PresentedNumberUnscreened.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { CintExtension, _decode_CintExtension, _encode_CintExtension } from "../Call-Interception-Operations-asn1-97/CintExtension.ta.mjs";

/**
 * @summary CintCondArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CintCondArg ::= SEQUENCE {
 *     interceptionCause Condition,
 *     originalCalledNumber [1] PresentedNumberUnscreened OPTIONAL,
 *     calledName [2] Name OPTIONAL,
 *     originalCalledName [3] Name OPTIONAL,
 *     extension CintExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CintCondArg {
    /**
     * @summary `interceptionCause`.
     * @public
     * @readonly
     */
    readonly interceptionCause: Condition;
    /**
     * @summary `originalCalledNumber`.
     * @public
     * @readonly
     */
    readonly originalCalledNumber: OPTIONAL<PresentedNumberUnscreened>;
    /**
     * @summary `calledName`.
     * @public
     * @readonly
     */
    readonly calledName: OPTIONAL<Name>;
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
    readonly extension: OPTIONAL<CintExtension>;

    constructor (
        interceptionCause: Condition,
        originalCalledNumber: OPTIONAL<PresentedNumberUnscreened>,
        calledName: OPTIONAL<Name>,
        originalCalledName: OPTIONAL<Name>,
        extension: OPTIONAL<CintExtension>
    ) {
        this.interceptionCause = interceptionCause;
        this.originalCalledNumber = originalCalledNumber;
        this.calledName = calledName;
        this.originalCalledName = originalCalledName;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a CintCondArg
     * @description
     * 
     * This takes an `object` and converts it to a `CintCondArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CintCondArg`.
     * @returns {CintCondArg}
     */
    public static _from_object (_o: { [_K in keyof (CintCondArg)]: (CintCondArg)[_K] }): CintCondArg {
        return new CintCondArg(_o.interceptionCause, _o.originalCalledNumber, _o.calledName, _o.originalCalledName, _o.extension);
    }

}

/**
 * @summary The Leading Root Component Types of CintCondArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CintCondArg: $.ComponentSpec[] = [
    new $.ComponentSpec("interceptionCause", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("originalCalledNumber", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("calledName", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("originalCalledName", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.universal, 5), $.hasTag(_TagClass.context, 5), $.hasTag(_TagClass.context, 6)))
];

/**
 * @summary The Trailing Root Component Types of CintCondArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CintCondArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CintCondArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CintCondArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CintCondArg: $.ASN1Decoder<CintCondArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CintCondArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CintCondArg (el: _Element): CintCondArg {
    if (!_cached_decoder_for_CintCondArg) { _cached_decoder_for_CintCondArg = function (el: _Element): CintCondArg {
    let interceptionCause!: Condition;
    let originalCalledNumber: OPTIONAL<PresentedNumberUnscreened>;
    let calledName: OPTIONAL<Name>;
    let originalCalledName: OPTIONAL<Name>;
    let extension: OPTIONAL<CintExtension>;
    const callbacks: $.DecodingMap = {
        "interceptionCause": (_el: _Element): void => { interceptionCause = _decode_Condition(_el); },
        "originalCalledNumber": (_el: _Element): void => { originalCalledNumber = $._decode_explicit<PresentedNumberUnscreened>(() => _decode_PresentedNumberUnscreened)(_el); },
        "calledName": (_el: _Element): void => { calledName = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "originalCalledName": (_el: _Element): void => { originalCalledName = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "extension": (_el: _Element): void => { extension = _decode_CintExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CintCondArg,
        _extension_additions_list_spec_for_CintCondArg,
        _root_component_type_list_2_spec_for_CintCondArg,
        undefined,
    );
    return new CintCondArg(
        interceptionCause,
        originalCalledNumber,
        calledName,
        originalCalledName,
        extension
    );
}; }
    return _cached_decoder_for_CintCondArg(el);
}

let _cached_encoder_for_CintCondArg: $.ASN1Encoder<CintCondArg> | null = null;

/**
 * @summary Encodes a(n) CintCondArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CintCondArg, encoded as an ASN.1 Element.
 */
export
function _encode_CintCondArg (value: CintCondArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CintCondArg) { _cached_encoder_for_CintCondArg = function (value: CintCondArg, _elGetter: $.ASN1Encoder<CintCondArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_Condition(value.interceptionCause, $.BER));
    if (value.originalCalledNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_PresentedNumberUnscreened, $.BER)(value.originalCalledNumber, $.BER));
    }
    if (value.calledName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_Name, $.BER)(value.calledName, $.BER));
    }
    if (value.originalCalledName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_Name, $.BER)(value.originalCalledName, $.BER));
    }
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CintExtension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CintCondArg(value, elGetter);
}

/* eslint-enable */
