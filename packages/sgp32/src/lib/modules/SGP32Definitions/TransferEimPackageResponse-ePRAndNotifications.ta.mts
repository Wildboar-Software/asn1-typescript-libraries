/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EuiccPackageResult, _decode_EuiccPackageResult, _encode_EuiccPackageResult } from "../SGP32Definitions/EuiccPackageResult.ta.mjs";
// export { EuiccPackageResult, _decode_EuiccPackageResult, _encode_EuiccPackageResult } from "../SGP32Definitions/EuiccPackageResult.ta.mjs";
import { PendingNotificationList, _decode_PendingNotificationList, _encode_PendingNotificationList } from "../SGP32Definitions/PendingNotificationList.ta.mjs";
// export { PendingNotificationList, _decode_PendingNotificationList, _encode_PendingNotificationList } from "../SGP32Definitions/PendingNotificationList.ta.mjs";


/**
 * @summary TransferEimPackageResponse_ePRAndNotifications
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransferEimPackageResponse-ePRAndNotifications ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class TransferEimPackageResponse_ePRAndNotifications {
    constructor (
        /**
         * @summary `euiccPackageResult`.
         * @public
         * @readonly
         */
        readonly euiccPackageResult: EuiccPackageResult,
        /**
         * @summary `notificationList`.
         * @public
         * @readonly
         */
        readonly notificationList: PendingNotificationList
    ) {}

    /**
     * @summary Restructures an object into a TransferEimPackageResponse_ePRAndNotifications
     * @description
     * 
     * This takes an `object` and converts it to a `TransferEimPackageResponse_ePRAndNotifications`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TransferEimPackageResponse_ePRAndNotifications`.
     * @returns {TransferEimPackageResponse_ePRAndNotifications}
     */
    public static _from_object (_o: { [_K in keyof (TransferEimPackageResponse_ePRAndNotifications)]: (TransferEimPackageResponse_ePRAndNotifications)[_K] }): TransferEimPackageResponse_ePRAndNotifications {
        return new TransferEimPackageResponse_ePRAndNotifications(_o.euiccPackageResult, _o.notificationList);
    }


}

/**
 * @summary The Leading Root Component Types of TransferEimPackageResponse_ePRAndNotifications
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TransferEimPackageResponse_ePRAndNotifications: $.ComponentSpec[] = [
    new $.ComponentSpec("euiccPackageResult", false, $.hasTag(_TagClass.context, 81)),
    new $.ComponentSpec("notificationList", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of TransferEimPackageResponse_ePRAndNotifications
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TransferEimPackageResponse_ePRAndNotifications: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TransferEimPackageResponse_ePRAndNotifications
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TransferEimPackageResponse_ePRAndNotifications: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TransferEimPackageResponse_ePRAndNotifications: $.ASN1Decoder<TransferEimPackageResponse_ePRAndNotifications> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransferEimPackageResponse_ePRAndNotifications
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransferEimPackageResponse_ePRAndNotifications (el: _Element): TransferEimPackageResponse_ePRAndNotifications {
    if (!_cached_decoder_for_TransferEimPackageResponse_ePRAndNotifications) { _cached_decoder_for_TransferEimPackageResponse_ePRAndNotifications = function (el: _Element): TransferEimPackageResponse_ePRAndNotifications {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TransferEimPackageResponse-ePRAndNotifications contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "euiccPackageResult";
    sequence[1].name = "notificationList";
    let euiccPackageResult!: EuiccPackageResult;
    let notificationList!: PendingNotificationList;
    euiccPackageResult = $._decode_implicit<EuiccPackageResult>(() => _decode_EuiccPackageResult)(sequence[0]);
    notificationList = $._decode_implicit<PendingNotificationList>(() => _decode_PendingNotificationList)(sequence[1]);
    return new TransferEimPackageResponse_ePRAndNotifications(
        euiccPackageResult,
        notificationList,

    );
}; }
    return _cached_decoder_for_TransferEimPackageResponse_ePRAndNotifications(el);
}

let _cached_encoder_for_TransferEimPackageResponse_ePRAndNotifications: $.ASN1Encoder<TransferEimPackageResponse_ePRAndNotifications> | null = null;

/**
 * @summary Encodes a(n) TransferEimPackageResponse_ePRAndNotifications into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransferEimPackageResponse_ePRAndNotifications, encoded as an ASN.1 Element.
 */
export
function _encode_TransferEimPackageResponse_ePRAndNotifications (value: TransferEimPackageResponse_ePRAndNotifications, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransferEimPackageResponse_ePRAndNotifications) { _cached_encoder_for_TransferEimPackageResponse_ePRAndNotifications = function (value: TransferEimPackageResponse_ePRAndNotifications, elGetter: $.ASN1Encoder<TransferEimPackageResponse_ePRAndNotifications>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 81, () => _encode_EuiccPackageResult, $.BER)(value.euiccPackageResult, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_PendingNotificationList, $.BER)(value.notificationList, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TransferEimPackageResponse_ePRAndNotifications(value, elGetter);
}


/* eslint-enable */
