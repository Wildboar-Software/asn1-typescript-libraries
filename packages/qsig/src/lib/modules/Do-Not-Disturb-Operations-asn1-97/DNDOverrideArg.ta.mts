/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DNDOCapabilityLevel, _decode_DNDOCapabilityLevel, _encode_DNDOCapabilityLevel, _enum_for_DNDOCapabilityLevel } from "../Do-Not-Disturb-Operations-asn1-97/DNDOCapabilityLevel.ta.mjs";
import { DNDOverrideArg_argumentExtension, _decode_DNDOverrideArg_argumentExtension, _encode_DNDOverrideArg_argumentExtension } from "../Do-Not-Disturb-Operations-asn1-97/DNDOverrideArg-argumentExtension.ta.mjs";

/**
 * @summary DNDOverrideArg
 * @description
 *
 * Immediate SS-DNDO request carried in SETUP (ECMA-194 §6.6.2.1.1).
 * The Terminating PINX compares `dndoCapabilityLevel` with the
 * called user's DNDPL and overrides SS-DND only when DNDPL is
 * strictly smaller (ECMA-194 §6.6.1.1; ECMA-193 §6.3.15).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-194/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-193/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DNDOverrideArg ::= SEQUENCE {
 *     dndoCapabilityLevel DNDOCapabilityLevel,
 *     argumentExtension CHOICE {
 *         extension [1] IMPLICIT Extension {{DNDExtSet}},
 *         sequenceOfExtn [2] IMPLICIT SEQUENCE OF Extension {{DNDExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DNDOverrideArg {
    /**
     * @summary `dndoCapabilityLevel`.
     * @description
     *
     * Calling user's DNDOCL for this call. Override is allowed only
     * when this value is strictly greater than the called user's
     * DNDPL (ECMA-194 §6.6.1.1; ECMA-193 §6.3.15).
     * @public
     * @readonly
     */
    readonly dndoCapabilityLevel: DNDOCapabilityLevel;
    /**
     * @summary `argumentExtension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-194 §6.3.1 defines the
     * CHOICE and leaves `DNDExtSet` empty.
     * @public
     * @readonly
     */
    readonly argumentExtension: OPTIONAL<DNDOverrideArg_argumentExtension>;

    constructor (
        dndoCapabilityLevel: DNDOCapabilityLevel,
        argumentExtension?: OPTIONAL<DNDOverrideArg_argumentExtension>
    ) {
        this.dndoCapabilityLevel = dndoCapabilityLevel;
        this.argumentExtension = argumentExtension;
    }

    /**
     * @summary Restructures an object into a DNDOverrideArg
     * @description
     * 
     * This takes an `object` and converts it to a `DNDOverrideArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DNDOverrideArg`.
     * @returns {DNDOverrideArg}
     */
    public static _from_object (_o: { [_K in keyof (DNDOverrideArg)]: (DNDOverrideArg)[_K] }): DNDOverrideArg {
        return new DNDOverrideArg(_o.dndoCapabilityLevel, _o.argumentExtension);
    }

        /**
         * @summary The enum used as the type of the component `dndoCapabilityLevel`
         * @public
         * @static
         */

    public static _enum_for_dndoCapabilityLevel = _enum_for_DNDOCapabilityLevel;
}

/**
 * @summary The Leading Root Component Types of DNDOverrideArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DNDOverrideArg: $.ComponentSpec[] = [
    new $.ComponentSpec("dndoCapabilityLevel", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("argumentExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of DNDOverrideArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DNDOverrideArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DNDOverrideArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DNDOverrideArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DNDOverrideArg: $.ASN1Decoder<DNDOverrideArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DNDOverrideArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DNDOverrideArg (el: _Element): DNDOverrideArg {
    if (!_cached_decoder_for_DNDOverrideArg) { _cached_decoder_for_DNDOverrideArg = function (el: _Element): DNDOverrideArg {
    let dndoCapabilityLevel!: DNDOCapabilityLevel;
    let argumentExtension: OPTIONAL<DNDOverrideArg_argumentExtension>;
    const callbacks: $.DecodingMap = {
        "dndoCapabilityLevel": (_el: _Element): void => { dndoCapabilityLevel = _decode_DNDOCapabilityLevel(_el); },
        "argumentExtension": (_el: _Element): void => { argumentExtension = _decode_DNDOverrideArg_argumentExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DNDOverrideArg,
        _extension_additions_list_spec_for_DNDOverrideArg,
        _root_component_type_list_2_spec_for_DNDOverrideArg,
        undefined,
    );
    return new DNDOverrideArg(
        dndoCapabilityLevel,
        argumentExtension
    );
}; }
    return _cached_decoder_for_DNDOverrideArg(el);
}

let _cached_encoder_for_DNDOverrideArg: $.ASN1Encoder<DNDOverrideArg> | null = null;

/**
 * @summary Encodes a(n) DNDOverrideArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DNDOverrideArg, encoded as an ASN.1 Element.
 */
export
function _encode_DNDOverrideArg (value: DNDOverrideArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DNDOverrideArg) { _cached_encoder_for_DNDOverrideArg = function (value: DNDOverrideArg, _elGetter: $.ASN1Encoder<DNDOverrideArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_DNDOCapabilityLevel(value.dndoCapabilityLevel, $.BER));
    if (value.argumentExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_DNDOverrideArg_argumentExtension(value.argumentExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DNDOverrideArg(value, elGetter);
}

/* eslint-enable */
