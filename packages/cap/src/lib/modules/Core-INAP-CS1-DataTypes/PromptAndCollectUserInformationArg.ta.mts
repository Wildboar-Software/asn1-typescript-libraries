/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
import { CollectedInfo, _decode_CollectedInfo, _encode_CollectedInfo } from "../Core-INAP-CS1-DataTypes/CollectedInfo.ta.mjs";
// export { CollectedInfo, _decode_CollectedInfo, _encode_CollectedInfo } from "../Core-INAP-CS1-DataTypes/CollectedInfo.ta.mjs";
import { InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "../Core-INAP-CS1-DataTypes/InformationToSend.ta.mjs";
// export { InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "../Core-INAP-CS1-DataTypes/InformationToSend.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";


/**
 * @summary PromptAndCollectUserInformationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PromptAndCollectUserInformationArg ::= SEQUENCE {
 *      collectedInfo     [0] CollectedInfo,
 *      disconnectFromIPForbidden     [1] BOOLEAN     DEFAULT TRUE,
 *      informationToSend      [2] InformationToSend     OPTIONAL,
 *      extensions     [3] SEQUENCE SIZE(1..numOfExtensions) OF ExtensionField     OPTIONAL
 * --  ...
 *      }
 * ```
 * 
 * @class
 */
export
class PromptAndCollectUserInformationArg {
    constructor (
        /**
         * @summary `collectedInfo`.
         * @public
         * @readonly
         */
        readonly collectedInfo: CollectedInfo,
        /**
         * @summary `disconnectFromIPForbidden`.
         * @public
         * @readonly
         */
        readonly disconnectFromIPForbidden: OPTIONAL<BOOLEAN>,
        /**
         * @summary `informationToSend`.
         * @public
         * @readonly
         */
        readonly informationToSend: OPTIONAL<InformationToSend>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

    /**
     * @summary Restructures an object into a PromptAndCollectUserInformationArg
     * @description
     * 
     * This takes an `object` and converts it to a `PromptAndCollectUserInformationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PromptAndCollectUserInformationArg`.
     * @returns {PromptAndCollectUserInformationArg}
     */
    public static _from_object (_o: { [_K in keyof (PromptAndCollectUserInformationArg)]: (PromptAndCollectUserInformationArg)[_K] }): PromptAndCollectUserInformationArg {
        return new PromptAndCollectUserInformationArg(_o.collectedInfo, _o.disconnectFromIPForbidden, _o.informationToSend, _o.extensions);
    }

    /**
     * @summary Getter that returns the default value for `disconnectFromIPForbidden`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_disconnectFromIPForbidden () { return true; }
}

/**
 * @summary The Leading Root Component Types of PromptAndCollectUserInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PromptAndCollectUserInformationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("collectedInfo", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("disconnectFromIPForbidden", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("informationToSend", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of PromptAndCollectUserInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PromptAndCollectUserInformationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PromptAndCollectUserInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PromptAndCollectUserInformationArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PromptAndCollectUserInformationArg: $.ASN1Decoder<PromptAndCollectUserInformationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PromptAndCollectUserInformationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PromptAndCollectUserInformationArg (el: _Element): PromptAndCollectUserInformationArg {
    if (!_cached_decoder_for_PromptAndCollectUserInformationArg) { _cached_decoder_for_PromptAndCollectUserInformationArg = function (el: _Element): PromptAndCollectUserInformationArg {
    let collectedInfo!: CollectedInfo;
    let disconnectFromIPForbidden: OPTIONAL<BOOLEAN> = PromptAndCollectUserInformationArg._default_value_for_disconnectFromIPForbidden;
    let informationToSend: OPTIONAL<InformationToSend>;
    let extensions: OPTIONAL<ExtensionField[]>;
    const callbacks: $.DecodingMap = {
        "collectedInfo": (_el: _Element): void => { collectedInfo = $._decode_explicit<CollectedInfo>(() => _decode_CollectedInfo)(_el); },
        "disconnectFromIPForbidden": (_el: _Element): void => { disconnectFromIPForbidden = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "informationToSend": (_el: _Element): void => { informationToSend = $._decode_explicit<InformationToSend>(() => _decode_InformationToSend)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PromptAndCollectUserInformationArg,
        _extension_additions_list_spec_for_PromptAndCollectUserInformationArg,
        _root_component_type_list_2_spec_for_PromptAndCollectUserInformationArg,
        undefined,
    );
    return new PromptAndCollectUserInformationArg(
        collectedInfo,
        disconnectFromIPForbidden,
        informationToSend,
        extensions
    );
}; }
    return _cached_decoder_for_PromptAndCollectUserInformationArg(el);
}

let _cached_encoder_for_PromptAndCollectUserInformationArg: $.ASN1Encoder<PromptAndCollectUserInformationArg> | null = null;

/**
 * @summary Encodes a(n) PromptAndCollectUserInformationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PromptAndCollectUserInformationArg, encoded as an ASN.1 Element.
 */
export
function _encode_PromptAndCollectUserInformationArg (value: PromptAndCollectUserInformationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PromptAndCollectUserInformationArg) { _cached_encoder_for_PromptAndCollectUserInformationArg = function (value: PromptAndCollectUserInformationArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_CollectedInfo, $.BER)(value.collectedInfo, $.BER),
            /* IF_DEFAULT */ (value.disconnectFromIPForbidden === undefined || $.deepEq(value.disconnectFromIPForbidden, PromptAndCollectUserInformationArg._default_value_for_disconnectFromIPForbidden) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.disconnectFromIPForbidden, $.BER)),
            /* IF_ABSENT  */ ((value.informationToSend === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_InformationToSend, $.BER)(value.informationToSend, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PromptAndCollectUserInformationArg(value, elGetter);
}


/* eslint-enable */
