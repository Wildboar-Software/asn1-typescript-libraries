/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ORDescriptor, _decode_ORDescriptor, _encode_ORDescriptor } from "@wildboar/x400/IPMSInformationObjects";
import { _decode_AddressListDesignator_type, _encode_AddressListDesignator_type, AddressListDesignator_type } from "../MMSHeadingExtensions/AddressListDesignator-type.ta.mjs";
import { _decode_AddressListRequest, _encode_AddressListRequest, AddressListRequest } from "../MMSHeadingExtensions/AddressListRequest.ta.mjs";


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
    /**
     * @summary `type_`.
     * @public
     * @readonly
     */
    readonly type_: AddressListDesignator_type;
    /**
     * @summary `listName`.
     * @public
     * @readonly
     */
    readonly listName: ORDescriptor;
    /**
     * @summary `notificationRequest`.
     * @public
     * @readonly
     */
    readonly notificationRequest: OPTIONAL<AddressListRequest>;
    /**
     * @summary `replyRequest`.
     * @public
     * @readonly
     */
    readonly replyRequest: OPTIONAL<AddressListRequest>;

    constructor (
        type_: AddressListDesignator_type,
        listName: ORDescriptor,
        notificationRequest: OPTIONAL<AddressListRequest>,
        replyRequest: OPTIONAL<AddressListRequest>
    ) {
        this.type_ = type_;
        this.listName = listName;
        this.notificationRequest = notificationRequest;
        this.replyRequest = replyRequest;
    }

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
    new $.ComponentSpec("listName", false, $.hasTag(_TagClass.context, 1)),
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
    const _components: _Element[] = new Array(4);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_AddressListDesignator_type, $.BER)(value.type_, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ORDescriptor, $.BER)(value.listName, $.BER);
    if (value.notificationRequest !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_AddressListRequest, $.BER)(value.notificationRequest, $.BER);
    }
    if (value.replyRequest !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_AddressListRequest, $.BER)(value.replyRequest, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_AddressListDesignator(value, elGetter);
}


/* eslint-enable */
