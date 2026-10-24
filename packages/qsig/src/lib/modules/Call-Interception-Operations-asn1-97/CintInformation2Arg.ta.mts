/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CintCause, _decode_CintCause, _encode_CintCause } from "../Call-Interception-Operations-asn1-97/CintCause.ta.mjs";
import { PresentedNumberUnscreened, _decode_PresentedNumberUnscreened, _encode_PresentedNumberUnscreened } from "../Addressing-Data-Elements-asn1-97/PresentedNumberUnscreened.ta.mjs";
import { Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { CintExtension, _decode_CintExtension, _encode_CintExtension } from "../Call-Interception-Operations-asn1-97/CintExtension.ta.mjs";

/**
 * @summary CintInformation2Arg
 * @description
 *
 * Notification delivered to the intercepted-to user (ECMA-221
 * §6.6.4.1, §6.6.6.1; ECMA-220 §6.2.2.2.1). The cause is mandatory.
 * Called number and name are included when available. Original
 * called number and name are included only when the call was
 * diverted before interception and that information is available.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-221/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-220/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CintInformation2Arg ::= SEQUENCE {
 *     interceptionCause CintCause,
 *     calledNumber [1] PresentedNumberUnscreened OPTIONAL,
 *     originalCalledNumber [2] PresentedNumberUnscreened OPTIONAL,
 *     calledName [3] Name OPTIONAL,
 *     originalCalledName [4] Name OPTIONAL,
 *     extension CintExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CintInformation2Arg {
    /**
     * @summary `interceptionCause`.
     * @description
     *
     * Cause given to the intercepted-to user (ECMA-221 §6.6.4.1;
     * ECMA-220 §6.2.2.2.1).
     * @public
     * @readonly
     */
    readonly interceptionCause: CintCause;
    /**
     * @summary `calledNumber`.
     * @description
     *
     * Number of the user the call was directed to before
     * interception, when that number is available (ECMA-221
     * §6.6.4.1; ECMA-220 §4.2.5).
     * @public
     * @readonly
     */
    readonly calledNumber: OPTIONAL<PresentedNumberUnscreened>;
    /**
     * @summary `originalCalledNumber`.
     * @description
     *
     * Original called number, included only if the call was diverted
     * before interception and the number is available (ECMA-221
     * §6.6.4.1).
     * @public
     * @readonly
     */
    readonly originalCalledNumber: OPTIONAL<PresentedNumberUnscreened>;
    /**
     * @summary `calledName`.
     * @description
     *
     * Name of the called user, when available (ECMA-221 §6.6.4.1;
     * ECMA-220 §6.2.2.2.1).
     * @public
     * @readonly
     */
    readonly calledName: OPTIONAL<Name>;
    /**
     * @summary `originalCalledName`.
     * @description
     *
     * Original called name, included only if the call was diverted
     * before interception and the name is available (ECMA-221
     * §6.6.4.1).
     * @public
     * @readonly
     */
    readonly originalCalledName: OPTIONAL<Name>;
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
        calledNumber?: OPTIONAL<PresentedNumberUnscreened>,
        originalCalledNumber?: OPTIONAL<PresentedNumberUnscreened>,
        calledName?: OPTIONAL<Name>,
        originalCalledName?: OPTIONAL<Name>,
        extension?: OPTIONAL<CintExtension>
    ) {
        this.interceptionCause = interceptionCause;
        this.calledNumber = calledNumber;
        this.originalCalledNumber = originalCalledNumber;
        this.calledName = calledName;
        this.originalCalledName = originalCalledName;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a CintInformation2Arg
     * @description
     * 
     * This takes an `object` and converts it to a `CintInformation2Arg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CintInformation2Arg`.
     * @returns {CintInformation2Arg}
     */
    public static _from_object (_o: { [_K in keyof (CintInformation2Arg)]: (CintInformation2Arg)[_K] }): CintInformation2Arg {
        return new CintInformation2Arg(_o.interceptionCause, _o.calledNumber, _o.originalCalledNumber, _o.calledName, _o.originalCalledName, _o.extension);
    }

}

/**
 * @summary The Leading Root Component Types of CintInformation2Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CintInformation2Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("interceptionCause", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("calledNumber", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("originalCalledNumber", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("calledName", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("originalCalledName", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.universal, 5), $.hasTag(_TagClass.context, 5), $.hasTag(_TagClass.context, 6)))
];

/**
 * @summary The Trailing Root Component Types of CintInformation2Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CintInformation2Arg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CintInformation2Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CintInformation2Arg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CintInformation2Arg: $.ASN1Decoder<CintInformation2Arg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CintInformation2Arg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CintInformation2Arg (el: _Element): CintInformation2Arg {
    if (!_cached_decoder_for_CintInformation2Arg) { _cached_decoder_for_CintInformation2Arg = function (el: _Element): CintInformation2Arg {
    let interceptionCause!: CintCause;
    let calledNumber: OPTIONAL<PresentedNumberUnscreened>;
    let originalCalledNumber: OPTIONAL<PresentedNumberUnscreened>;
    let calledName: OPTIONAL<Name>;
    let originalCalledName: OPTIONAL<Name>;
    let extension: OPTIONAL<CintExtension>;
    const callbacks: $.DecodingMap = {
        "interceptionCause": (_el: _Element): void => { interceptionCause = _decode_CintCause(_el); },
        "calledNumber": (_el: _Element): void => { calledNumber = $._decode_explicit<PresentedNumberUnscreened>(() => _decode_PresentedNumberUnscreened)(_el); },
        "originalCalledNumber": (_el: _Element): void => { originalCalledNumber = $._decode_explicit<PresentedNumberUnscreened>(() => _decode_PresentedNumberUnscreened)(_el); },
        "calledName": (_el: _Element): void => { calledName = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "originalCalledName": (_el: _Element): void => { originalCalledName = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "extension": (_el: _Element): void => { extension = _decode_CintExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CintInformation2Arg,
        _extension_additions_list_spec_for_CintInformation2Arg,
        _root_component_type_list_2_spec_for_CintInformation2Arg,
        undefined,
    );
    return new CintInformation2Arg(
        interceptionCause,
        calledNumber,
        originalCalledNumber,
        calledName,
        originalCalledName,
        extension
    );
}; }
    return _cached_decoder_for_CintInformation2Arg(el);
}

let _cached_encoder_for_CintInformation2Arg: $.ASN1Encoder<CintInformation2Arg> | null = null;

/**
 * @summary Encodes a(n) CintInformation2Arg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CintInformation2Arg, encoded as an ASN.1 Element.
 */
export
function _encode_CintInformation2Arg (value: CintInformation2Arg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CintInformation2Arg) { _cached_encoder_for_CintInformation2Arg = function (value: CintInformation2Arg, _elGetter: $.ASN1Encoder<CintInformation2Arg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_CintCause(value.interceptionCause, $.BER));
    if (value.calledNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_PresentedNumberUnscreened, $.BER)(value.calledNumber, $.BER));
    }
    if (value.originalCalledNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_PresentedNumberUnscreened, $.BER)(value.originalCalledNumber, $.BER));
    }
    if (value.calledName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_Name, $.BER)(value.calledName, $.BER));
    }
    if (value.originalCalledName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_Name, $.BER)(value.originalCalledName, $.BER));
    }
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CintExtension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CintInformation2Arg(value, elGetter);
}

/* eslint-enable */
