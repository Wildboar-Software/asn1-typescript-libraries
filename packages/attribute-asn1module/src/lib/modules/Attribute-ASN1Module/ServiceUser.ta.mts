/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
/**
 * @summary ServiceUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceUser ::= SEQUENCE {
 *   identifier  DMI-SERVICEUSER.&id({ServiceUserSet}),
 *   details     DMI-SERVICEUSER.&Value({ServiceUserSet}{@.identifier})
 * }
 * ```
 * 
 * @class
 */
export
class ServiceUser {
    constructor (
        /**
         * @summary `identifier`.
         * @public
         * @readonly
         */
        readonly identifier: OBJECT_IDENTIFIER,
        /**
         * @summary `details`.
         * @public
         * @readonly
         */
        readonly details: _Element
    ) {}

    /**
     * @summary Restructures an object into a ServiceUser
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceUser`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceUser`.
     * @returns {ServiceUser}
     */
    public static _from_object (_o: { [_K in keyof (ServiceUser)]: (ServiceUser)[_K] }): ServiceUser {
        return new ServiceUser(_o.identifier, _o.details);
    }


}

/**
 * @summary The Leading Root Component Types of ServiceUser
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceUser: $.ComponentSpec[] = [
    new $.ComponentSpec("identifier", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("details", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of ServiceUser
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceUser: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceUser
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceUser: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceUser: $.ASN1Decoder<ServiceUser> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceUser
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceUser} The decoded data structure.
 */
export
function _decode_ServiceUser (el: _Element) {
    if (!_cached_decoder_for_ServiceUser) { _cached_decoder_for_ServiceUser = function (el: _Element): ServiceUser {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ServiceUser contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "identifier";
    sequence[1].name = "details";
    let identifier!: OBJECT_IDENTIFIER;
    let details!: _Element;
    identifier = $._decodeObjectIdentifier(sequence[0]);
    details = $._decodeAny(sequence[1]);
    return new ServiceUser(
        identifier,
        details,

    );
}; }
    return _cached_decoder_for_ServiceUser(el);
}

let _cached_encoder_for_ServiceUser: $.ASN1Encoder<ServiceUser> | null = null;

/**
 * @summary Encodes a(n) ServiceUser into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceUser, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceUser (value: ServiceUser, elGetter: $.ASN1Encoder<ServiceUser>) {
    if (!_cached_encoder_for_ServiceUser) { _cached_encoder_for_ServiceUser = function (value: ServiceUser): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.identifier, $.BER),
            /* REQUIRED   */ $._encodeAny(value.details, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServiceUser(value, elGetter);
}


/* eslint-enable */
