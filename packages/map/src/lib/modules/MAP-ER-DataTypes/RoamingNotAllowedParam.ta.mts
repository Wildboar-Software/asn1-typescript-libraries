/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AdditionalRoamingNotAllowedCause, _decode_AdditionalRoamingNotAllowedCause, _encode_AdditionalRoamingNotAllowedCause, _enum_for_AdditionalRoamingNotAllowedCause } from "../MAP-ER-DataTypes/AdditionalRoamingNotAllowedCause.ta.mjs";
import { RoamingNotAllowedCause, _decode_RoamingNotAllowedCause, _encode_RoamingNotAllowedCause, _enum_for_RoamingNotAllowedCause } from "../MAP-ER-DataTypes/RoamingNotAllowedCause.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary RoamingNotAllowedParam
 * @description
 * 
 * Parameter of `roamingNotAllowed`. If `additionalRoamingNotAllowedCause` is
 * received by the MSC/VLR or SGSN, `roamingNotAllowedCause` shall be discarded
 * (3GPP TS 29.002 V19.1.0 clauses 7.6.1.4 and 17.7.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamingNotAllowedParam ::= SEQUENCE {
 *     roamingNotAllowedCause    RoamingNotAllowedCause,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     additionalRoamingNotAllowedCause    [0] AdditionalRoamingNotAllowedCause OPTIONAL }
 * ```
 * 
 * @class
 */
export
class RoamingNotAllowedParam {
    constructor (
        /**
         * @summary `roamingNotAllowedCause`.
         * @description
         *
         * Cause of roaming not allowed. Discarded if
         * `additionalRoamingNotAllowedCause` is received by the MSC/VLR or SGSN
         * (3GPP TS 29.002 V19.1.0 clause 17.7.7).
         *
         * @public
         * @readonly
         */
        readonly roamingNotAllowedCause: RoamingNotAllowedCause,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `additionalRoamingNotAllowedCause`.
         * @description
         *
         * If received by the MSC/VLR or SGSN, `roamingNotAllowedCause` shall be
         * discarded (3GPP TS 29.002 V19.1.0 clause 17.7.7).
         *
         * @public
         * @readonly
         */
        readonly additionalRoamingNotAllowedCause: OPTIONAL<AdditionalRoamingNotAllowedCause>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a RoamingNotAllowedParam
     * @description
     * 
     * This takes an `object` and converts it to a `RoamingNotAllowedParam`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RoamingNotAllowedParam`.
     * @returns {RoamingNotAllowedParam}
     */
    public static _from_object (_o: { [_K in keyof (RoamingNotAllowedParam)]: (RoamingNotAllowedParam)[_K] }): RoamingNotAllowedParam {
        return new RoamingNotAllowedParam(_o.roamingNotAllowedCause, _o.extensionContainer, _o.additionalRoamingNotAllowedCause, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `roamingNotAllowedCause`
         * @public
         * @static
         */

    public static _enum_for_roamingNotAllowedCause = _enum_for_RoamingNotAllowedCause;        /**
         * @summary The enum used as the type of the component `additionalRoamingNotAllowedCause`
         * @public
         * @static
         */

    public static _enum_for_additionalRoamingNotAllowedCause = _enum_for_AdditionalRoamingNotAllowedCause;
}

/**
 * @summary The Leading Root Component Types of RoamingNotAllowedParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RoamingNotAllowedParam: $.ComponentSpec[] = [
    new $.ComponentSpec("roamingNotAllowedCause", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of RoamingNotAllowedParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RoamingNotAllowedParam: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RoamingNotAllowedParam
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RoamingNotAllowedParam: $.ComponentSpec[] = [
    new $.ComponentSpec("additionalRoamingNotAllowedCause", true, $.hasTag(_TagClass.context, 0))
];

let _cached_decoder_for_RoamingNotAllowedParam: $.ASN1Decoder<RoamingNotAllowedParam> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoamingNotAllowedParam
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoamingNotAllowedParam (el: _Element): RoamingNotAllowedParam {
    if (!_cached_decoder_for_RoamingNotAllowedParam) { _cached_decoder_for_RoamingNotAllowedParam = function (el: _Element): RoamingNotAllowedParam {
    let roamingNotAllowedCause!: RoamingNotAllowedCause;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let additionalRoamingNotAllowedCause: OPTIONAL<AdditionalRoamingNotAllowedCause> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "roamingNotAllowedCause": (_el: _Element): void => { roamingNotAllowedCause = _decode_RoamingNotAllowedCause(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "additionalRoamingNotAllowedCause": (_el: _Element): void => { additionalRoamingNotAllowedCause = $._decode_implicit<AdditionalRoamingNotAllowedCause>(() => _decode_AdditionalRoamingNotAllowedCause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RoamingNotAllowedParam,
        _extension_additions_list_spec_for_RoamingNotAllowedParam,
        _root_component_type_list_2_spec_for_RoamingNotAllowedParam,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RoamingNotAllowedParam(
        roamingNotAllowedCause,
        extensionContainer,
        additionalRoamingNotAllowedCause,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RoamingNotAllowedParam(el);
}

let _cached_encoder_for_RoamingNotAllowedParam: $.ASN1Encoder<RoamingNotAllowedParam> | null = null;

/**
 * @summary Encodes a(n) RoamingNotAllowedParam into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoamingNotAllowedParam, encoded as an ASN.1 Element.
 */
export
function _encode_RoamingNotAllowedParam (value: RoamingNotAllowedParam, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoamingNotAllowedParam) { _cached_encoder_for_RoamingNotAllowedParam = function (value: RoamingNotAllowedParam, elGetter: $.ASN1Encoder<RoamingNotAllowedParam>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_RoamingNotAllowedCause(value.roamingNotAllowedCause, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.additionalRoamingNotAllowedCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AdditionalRoamingNotAllowedCause, $.BER)(value.additionalRoamingNotAllowedCause, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RoamingNotAllowedParam(value, elGetter);
}


/* eslint-enable */
