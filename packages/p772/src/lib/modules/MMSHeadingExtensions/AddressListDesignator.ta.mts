/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_AddressListDesignator_type, _encode_AddressListDesignator_type, AddressListDesignator_type } from "../MMSHeadingExtensions/AddressListDesignator-type.ta.mjs";
// export { AddressListDesignator_type, AddressListDesignator_type_primaryAddressList /* IMPORTED_LONG_NAMED_INTEGER */, primaryAddressList /* IMPORTED_SHORT_NAMED_INTEGER */, AddressListDesignator_type_copyAddressList /* IMPORTED_LONG_NAMED_INTEGER */, copyAddressList /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AddressListDesignator_type, _encode_AddressListDesignator_type } from "../MMSHeadingExtensions/AddressListDesignator-type.ta.mjs";
import { _decode_AddressListRequest, _encode_AddressListRequest, AddressListRequest } from "../MMSHeadingExtensions/AddressListRequest.ta.mjs";
// export { AddressListRequest, AddressListRequest_action /* IMPORTED_LONG_NAMED_INTEGER */, action /* IMPORTED_SHORT_NAMED_INTEGER */, AddressListRequest_info /* IMPORTED_LONG_NAMED_INTEGER */, info /* IMPORTED_SHORT_NAMED_INTEGER */, AddressListRequest_both /* IMPORTED_LONG_NAMED_INTEGER */, both /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AddressListRequest, _encode_AddressListRequest } from "../MMSHeadingExtensions/AddressListRequest.ta.mjs";


/**
 * @summary AddressListDesignator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddressListDesignator ::= SET {
 *   type                 [0]  INTEGER {primaryAddressList(0), copyAddressList(1)},
 *   listName             [1]  ORDescriptor,
 *   notificationRequest  [2]  AddressListRequest OPTIONAL,
 *   replyRequest         [3]  AddressListRequest OPTIONAL}
 * ```
 * 
 * @class
 */
export
class AddressListDesignator {
    constructor (
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: AddressListDesignator_type,
        /**
         * @summary `listName`.
         * @public
         * @readonly
         */
        readonly listName: ORDescriptor,
        /**
         * @summary `notificationRequest`.
         * @public
         * @readonly
         */
        readonly notificationRequest: OPTIONAL<AddressListRequest>,
        /**
         * @summary `replyRequest`.
         * @public
         * @readonly
         */
        readonly replyRequest: OPTIONAL<AddressListRequest>
    ) {}

    /**
     * @summary Restructures an object into a AddressListDesignator
     * @description
     * 
     * This takes an `object` and converts it to a `AddressListDesignator`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AddressListDesignator`.
     * @returns {AddressListDesignator}
     */
    public static _from_object (_o: { [_K in keyof (AddressListDesignator)]: (AddressListDesignator)[_K] }): AddressListDesignator {
        return new AddressListDesignator(_o.type_, _o.listName, _o.notificationRequest, _o.replyRequest);
    }


}

/**
 * @summary The Leading Root Component Types of AddressListDesignator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AddressListDesignator: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 0)),
    /* FIXME: listName COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("notificationRequest", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("replyRequest", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of AddressListDesignator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AddressListDesignator: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AddressListDesignator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AddressListDesignator: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AddressListDesignator: $.ASN1Decoder<AddressListDesignator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AddressListDesignator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AddressListDesignator (el: _Element): AddressListDesignator {
    if (!_cached_decoder_for_AddressListDesignator) { _cached_decoder_for_AddressListDesignator = function (el: _Element): AddressListDesignator {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let type_!: AddressListDesignator_type;
    let listName!: ORDescriptor;
    let notificationRequest: OPTIONAL<AddressListRequest>;
    let replyRequest: OPTIONAL<AddressListRequest>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decode_implicit<AddressListDesignator_type>(() => _decode_AddressListDesignator_type)(_el); },
        "listName": (_el: _Element): void => { listName = $._decode_implicit<ORDescriptor>(() => _decode_ORDescriptor)(_el); },
        "notificationRequest": (_el: _Element): void => { notificationRequest = $._decode_implicit<AddressListRequest>(() => _decode_AddressListRequest)(_el); },
        "replyRequest": (_el: _Element): void => { replyRequest = $._decode_implicit<AddressListRequest>(() => _decode_AddressListRequest)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_AddressListDesignator,
        _extension_additions_list_spec_for_AddressListDesignator,
        _root_component_type_list_2_spec_for_AddressListDesignator,
        undefined,
    );
    return new AddressListDesignator( /* SET_CONSTRUCTOR_CALL */
        type_,
        listName,
        notificationRequest,
        replyRequest
    );
}; }
    return _cached_decoder_for_AddressListDesignator(el);
}

let _cached_encoder_for_AddressListDesignator: $.ASN1Encoder<AddressListDesignator> | null = null;

/**
 * @summary Encodes a(n) AddressListDesignator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddressListDesignator, encoded as an ASN.1 Element.
 */
export
function _encode_AddressListDesignator (value: AddressListDesignator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AddressListDesignator) { _cached_encoder_for_AddressListDesignator = function (value: AddressListDesignator, elGetter: $.ASN1Encoder<AddressListDesignator>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AddressListDesignator_type, $.BER)(value.type_, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ORDescriptor, $.BER)(value.listName, $.BER),
            /* IF_ABSENT  */ ((value.notificationRequest === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AddressListRequest, $.BER)(value.notificationRequest, $.BER)),
            /* IF_ABSENT  */ ((value.replyRequest === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_AddressListRequest, $.BER)(value.replyRequest, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AddressListDesignator(value, elGetter);
}


/* eslint-enable */
