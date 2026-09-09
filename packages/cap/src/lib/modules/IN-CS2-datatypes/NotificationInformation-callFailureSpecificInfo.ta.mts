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
import { Cause, _decode_Cause, _encode_Cause } from "../IN-CS2-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-CS2-datatypes/Cause.ta.mjs";


/**
 * @summary NotificationInformation_callFailureSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationInformation-callFailureSpecificInfo ::= SEQUENCE {
 *     failureCause  [0]  Cause{bound} OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class NotificationInformation_callFailureSpecificInfo {
    constructor (
        /**
         * @summary `failureCause`.
         * @public
         * @readonly
         */
        readonly failureCause: OPTIONAL<Cause>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NotificationInformation_callFailureSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `NotificationInformation_callFailureSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NotificationInformation_callFailureSpecificInfo`.
     * @returns {NotificationInformation_callFailureSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (NotificationInformation_callFailureSpecificInfo)]: (NotificationInformation_callFailureSpecificInfo)[_K] }): NotificationInformation_callFailureSpecificInfo {
        return new NotificationInformation_callFailureSpecificInfo(_o.failureCause, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NotificationInformation_callFailureSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NotificationInformation_callFailureSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("failureCause", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of NotificationInformation_callFailureSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NotificationInformation_callFailureSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NotificationInformation_callFailureSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NotificationInformation_callFailureSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NotificationInformation_callFailureSpecificInfo: $.ASN1Decoder<NotificationInformation_callFailureSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationInformation_callFailureSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotificationInformation_callFailureSpecificInfo (el: _Element): NotificationInformation_callFailureSpecificInfo {
    if (!_cached_decoder_for_NotificationInformation_callFailureSpecificInfo) { _cached_decoder_for_NotificationInformation_callFailureSpecificInfo = function (el: _Element): NotificationInformation_callFailureSpecificInfo {
    let failureCause: OPTIONAL<Cause>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "failureCause": (_el: _Element): void => { failureCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NotificationInformation_callFailureSpecificInfo,
        _extension_additions_list_spec_for_NotificationInformation_callFailureSpecificInfo,
        _root_component_type_list_2_spec_for_NotificationInformation_callFailureSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NotificationInformation_callFailureSpecificInfo(
        failureCause,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NotificationInformation_callFailureSpecificInfo(el);
}

let _cached_encoder_for_NotificationInformation_callFailureSpecificInfo: $.ASN1Encoder<NotificationInformation_callFailureSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) NotificationInformation_callFailureSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationInformation_callFailureSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_NotificationInformation_callFailureSpecificInfo (value: NotificationInformation_callFailureSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotificationInformation_callFailureSpecificInfo) { _cached_encoder_for_NotificationInformation_callFailureSpecificInfo = function (value: NotificationInformation_callFailureSpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.failureCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Cause, $.BER)(value.failureCause, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NotificationInformation_callFailureSpecificInfo(value, elGetter);
}


/* eslint-enable */
