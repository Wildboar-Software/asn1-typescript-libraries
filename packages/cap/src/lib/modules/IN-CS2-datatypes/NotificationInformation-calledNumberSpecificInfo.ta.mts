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
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS2-datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS2-datatypes/CalledPartyNumber.ta.mjs";


/**
 * @summary NotificationInformation_calledNumberSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationInformation-calledNumberSpecificInfo {PARAMETERS-BOUND:bound} ::= SEQUENCE {
 *     calledNumber  [0]  CalledPartyNumber{bound} OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class NotificationInformation_calledNumberSpecificInfo {
    constructor (
        /**
         * @summary `calledNumber`.
         * @public
         * @readonly
         */
        readonly calledNumber: OPTIONAL<CalledPartyNumber>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NotificationInformation_calledNumberSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `NotificationInformation_calledNumberSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NotificationInformation_calledNumberSpecificInfo`.
     * @returns {NotificationInformation_calledNumberSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (NotificationInformation_calledNumberSpecificInfo)]: (NotificationInformation_calledNumberSpecificInfo)[_K] }): NotificationInformation_calledNumberSpecificInfo {
        return new NotificationInformation_calledNumberSpecificInfo(_o.calledNumber, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NotificationInformation_calledNumberSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NotificationInformation_calledNumberSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("calledNumber", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of NotificationInformation_calledNumberSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NotificationInformation_calledNumberSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NotificationInformation_calledNumberSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NotificationInformation_calledNumberSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NotificationInformation_calledNumberSpecificInfo: $.ASN1Decoder<NotificationInformation_calledNumberSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationInformation_calledNumberSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotificationInformation_calledNumberSpecificInfo (el: _Element): NotificationInformation_calledNumberSpecificInfo {
    if (!_cached_decoder_for_NotificationInformation_calledNumberSpecificInfo) { _cached_decoder_for_NotificationInformation_calledNumberSpecificInfo = function (el: _Element): NotificationInformation_calledNumberSpecificInfo {
    let calledNumber: OPTIONAL<CalledPartyNumber>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "calledNumber": (_el: _Element): void => { calledNumber = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NotificationInformation_calledNumberSpecificInfo,
        _extension_additions_list_spec_for_NotificationInformation_calledNumberSpecificInfo,
        _root_component_type_list_2_spec_for_NotificationInformation_calledNumberSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NotificationInformation_calledNumberSpecificInfo(
        calledNumber,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NotificationInformation_calledNumberSpecificInfo(el);
}

let _cached_encoder_for_NotificationInformation_calledNumberSpecificInfo: $.ASN1Encoder<NotificationInformation_calledNumberSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) NotificationInformation_calledNumberSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationInformation_calledNumberSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_NotificationInformation_calledNumberSpecificInfo (value: NotificationInformation_calledNumberSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotificationInformation_calledNumberSpecificInfo) { _cached_encoder_for_NotificationInformation_calledNumberSpecificInfo = function (value: NotificationInformation_calledNumberSpecificInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.calledNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CalledPartyNumber, $.BER)(value.calledNumber, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NotificationInformation_calledNumberSpecificInfo(value, elGetter);
}


/* eslint-enable */
