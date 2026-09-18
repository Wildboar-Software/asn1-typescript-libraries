/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ASQcontent_class, _decode_ASQcontent_class, _encode_ASQcontent_class } from "../ISO9041-VTP/ASQcontent-class.ta.mjs";
// export { ASQcontent_class, ASQcontent_class_basic /* IMPORTED_LONG_NAMED_INTEGER */, basic /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ASQcontent_class, _encode_ASQcontent_class } from "../ISO9041-VTP/ASQcontent-class.ta.mjs";
import { _decode_ImplementationIdent, _encode_ImplementationIdent } from "../G/ImplementationIdent.ta.mjs";
// export { ImplementationIdent, _decode_ImplementationIdent, _encode_ImplementationIdent } from "../G/ImplementationIdent.ta.mjs";
import { _decode_FunctionalUnits, _encode_FunctionalUnits } from "../G/FunctionalUnits.ta.mjs";
// export { FunctionalUnits, FunctionalUnits_profileSwitch /* IMPORTED_LONG_NAMED_BIT */, profileSwitch /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_multipleIntNeg /* IMPORTED_LONG_NAMED_BIT */, multipleIntNeg /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_negotiatedRelease /* IMPORTED_LONG_NAMED_BIT */, negotiatedRelease /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_urgentData /* IMPORTED_LONG_NAMED_BIT */, urgentData /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_destructiveBreak /* IMPORTED_LONG_NAMED_BIT */, destructiveBreak /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_enhancedAccess /* IMPORTED_LONG_NAMED_BIT */, enhancedAccess /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_structuredCOs /* IMPORTED_LONG_NAMED_BIT */, structuredCOs /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_blocks /* IMPORTED_LONG_NAMED_BIT */, blocks /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_fields /* IMPORTED_LONG_NAMED_BIT */, fields /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_referenceInfOs /* IMPORTED_LONG_NAMED_BIT */, referenceInfOs /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_ripple /* IMPORTED_LONG_NAMED_BIT */, ripple /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_exceptions /* IMPORTED_LONG_NAMED_BIT */, exceptions /* IMPORTED_SHORT_NAMED_BIT */, FunctionalUnits_contextRetention /* IMPORTED_LONG_NAMED_BIT */, contextRetention /* IMPORTED_SHORT_NAMED_BIT */, _decode_FunctionalUnits, _encode_FunctionalUnits } from "../G/FunctionalUnits.ta.mjs";
import { _decode_Profile, _encode_Profile } from "../G/Profile.ta.mjs";
// export { Profile, _decode_Profile, _encode_Profile } from "../G/Profile.ta.mjs";
import { _decode_ProtocolVersion, _encode_ProtocolVersion } from "../G/ProtocolVersion.ta.mjs";
// export { ProtocolVersion, ProtocolVersion_version1 /* IMPORTED_LONG_NAMED_BIT */, version1 /* IMPORTED_SHORT_NAMED_BIT */, _decode_ProtocolVersion, _encode_ProtocolVersion } from "../G/ProtocolVersion.ta.mjs";
import { ASQcontent_either, _decode_ASQcontent_either, _encode_ASQcontent_either } from "../ISO9041-VTP/ASQcontent-either.ta.mjs";
// export { ASQcontent_either, ASQcontent_either_a_mode /* IMPORTED_LONG_NAMED_INTEGER */, a_mode /* IMPORTED_SHORT_NAMED_INTEGER */, ASQcontent_either_s_mode /* IMPORTED_LONG_NAMED_INTEGER */, s_mode /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ASQcontent_either, _encode_ASQcontent_either } from "../ISO9041-VTP/ASQcontent-either.ta.mjs";


/**
 * @summary ASQcontent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASQcontent ::= SEQUENCE {
 *     class               [0] IMPLICIT INTEGER { basic (1) },
 *     implementation      [1] IMPLICIT G.ImplementationIdent OPTIONAL,
 *     functional-units    [2] IMPLICIT G.FunctionalUnits OPTIONAL,
 *     profile             [3] IMPLICIT G.Profile OPTIONAL,
 *     protocol-version    [4] IMPLICIT G.ProtocolVersion DEFAULT G.version1,
 *     either              [5] IMPLICIT INTEGER { a-mode (0), s-mode (1) } OPTIONAL
 *     -- only present if VT-mode parameter has value "either-A" or "either-S"
 * }
 * ```
 * 
 * @class
 */
export
class ASQcontent {
    constructor (
        /**
         * @summary `class_`.
         * @public
         * @readonly
         */
        readonly class_: ASQcontent_class,
        /**
         * @summary `implementation`.
         * @public
         * @readonly
         */
        readonly implementation: OPTIONAL<G.ImplementationIdent>,
        /**
         * @summary `functional_units`.
         * @public
         * @readonly
         */
        readonly functional_units: OPTIONAL<G.FunctionalUnits>,
        /**
         * @summary `profile`.
         * @public
         * @readonly
         */
        readonly profile: OPTIONAL<G.Profile>,
        /**
         * @summary `protocol_version`.
         * @public
         * @readonly
         */
        readonly protocol_version: OPTIONAL<G.ProtocolVersion>,
        /**
         * @summary `either`.
         * @public
         * @readonly
         */
        readonly either: OPTIONAL<ASQcontent_either>
    ) {}

    /**
     * @summary Restructures an object into a ASQcontent
     * @description
     * 
     * This takes an `object` and converts it to a `ASQcontent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ASQcontent`.
     * @returns {ASQcontent}
     */
    public static _from_object (_o: { [_K in keyof (ASQcontent)]: (ASQcontent)[_K] }): ASQcontent {
        return new ASQcontent(_o.class_, _o.implementation, _o.functional_units, _o.profile, _o.protocol_version, _o.either);
    }

    /**
     * @summary Getter that returns the default value for `protocol_version`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_protocol_version () { return G.version1; }
}

/**
 * @summary The Leading Root Component Types of ASQcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ASQcontent: $.ComponentSpec[] = [
    new $.ComponentSpec("class", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("implementation", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("functional-units", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("profile", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("protocol-version", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("either", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of ASQcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ASQcontent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ASQcontent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ASQcontent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ASQcontent: $.ASN1Decoder<ASQcontent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ASQcontent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ASQcontent (el: _Element): ASQcontent {
    if (!_cached_decoder_for_ASQcontent) { _cached_decoder_for_ASQcontent = function (el: _Element): ASQcontent {
    let class_!: ASQcontent_class;
    let implementation: OPTIONAL<G.ImplementationIdent>;
    let functional_units: OPTIONAL<G.FunctionalUnits>;
    let profile: OPTIONAL<G.Profile>;
    let protocol_version: OPTIONAL<G.ProtocolVersion> = ASQcontent._default_value_for_protocol_version;
    let either: OPTIONAL<ASQcontent_either>;
    const callbacks: $.DecodingMap = {
        "class": (_el: _Element): void => { class_ = $._decode_implicit<ASQcontent_class>(() => _decode_ASQcontent_class)(_el); },
        "implementation": (_el: _Element): void => { implementation = $._decode_implicit<G.ImplementationIdent>(() => G._decode_ImplementationIdent)(_el); },
        "functional-units": (_el: _Element): void => { functional_units = $._decode_implicit<G.FunctionalUnits>(() => G._decode_FunctionalUnits)(_el); },
        "profile": (_el: _Element): void => { profile = $._decode_implicit<G.Profile>(() => G._decode_Profile)(_el); },
        "protocol-version": (_el: _Element): void => { protocol_version = $._decode_implicit<G.ProtocolVersion>(() => G._decode_ProtocolVersion)(_el); },
        "either": (_el: _Element): void => { either = $._decode_implicit<ASQcontent_either>(() => _decode_ASQcontent_either)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ASQcontent,
        _extension_additions_list_spec_for_ASQcontent,
        _root_component_type_list_2_spec_for_ASQcontent,
        undefined,
    );
    return new ASQcontent(
        class_,
        implementation,
        functional_units,
        profile,
        protocol_version,
        either
    );
}; }
    return _cached_decoder_for_ASQcontent(el);
}

let _cached_encoder_for_ASQcontent: $.ASN1Encoder<ASQcontent> | null = null;

/**
 * @summary Encodes a(n) ASQcontent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASQcontent, encoded as an ASN.1 Element.
 */
export
function _encode_ASQcontent (value: ASQcontent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ASQcontent) { _cached_encoder_for_ASQcontent = function (value: ASQcontent): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ASQcontent_class, $.BER)(value.class_, $.BER),
            /* IF_ABSENT  */ ((value.implementation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => G._encode_ImplementationIdent, $.BER)(value.implementation, $.BER)),
            /* IF_ABSENT  */ ((value.functional_units === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => G._encode_FunctionalUnits, $.BER)(value.functional_units, $.BER)),
            /* IF_ABSENT  */ ((value.profile === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => G._encode_Profile, $.BER)(value.profile, $.BER)),
            /* IF_DEFAULT */ (value.protocol_version === undefined || $.deepEq(value.protocol_version, ASQcontent._default_value_for_protocol_version) ? undefined : $._encode_implicit(_TagClass.context, 4, () => G._encode_ProtocolVersion, $.BER)(value.protocol_version, $.BER)),
            /* IF_ABSENT  */ ((value.either === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ASQcontent_either, $.BER)(value.either, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ASQcontent(value, elGetter);
}


/* eslint-enable */
