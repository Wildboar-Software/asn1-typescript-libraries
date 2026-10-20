/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
import { AccessPointInformation, _decode_AccessPointInformation, _encode_AccessPointInformation } from "../DistributedOperations/AccessPointInformation.ta.mjs";
// export { AccessPointInformation, _decode_AccessPointInformation, _encode_AccessPointInformation } from "../DistributedOperations/AccessPointInformation.ta.mjs";


/**
 * @summary CrossReference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CrossReference ::= SET {
 *   contextPrefix     [0]  DistinguishedName,
 *   accessPoint       [1]  AccessPointInformation,
 *   chainingRequired  [2]  BOOLEAN DEFAULT FALSE
 * }
 * ```
 * 
 * @class
 */
export
class CrossReference {
    /**
     * @summary `contextPrefix`.
     * @public
     * @readonly
     */
    readonly contextPrefix: DistinguishedName;
    /**
     * @summary `accessPoint`.
     * @public
     * @readonly
     */
    readonly accessPoint: AccessPointInformation;
    /**
     * @summary `chainingRequired`.
     * @public
     * @readonly
     */
    readonly chainingRequired: OPTIONAL<BOOLEAN>;

    constructor (
        contextPrefix: DistinguishedName,
        accessPoint: AccessPointInformation,
        chainingRequired: OPTIONAL<BOOLEAN>
    ) {
        this.contextPrefix = contextPrefix;
        this.accessPoint = accessPoint;
        this.chainingRequired = chainingRequired;
    }

    /**
     * @summary Restructures an object into a CrossReference
     * @description
     * 
     * This takes an `object` and converts it to a `CrossReference`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CrossReference`.
     * @returns {CrossReference}
     */
    public static _from_object (_o: { [_K in keyof (CrossReference)]: (CrossReference)[_K] }): CrossReference {
        return new CrossReference(_o.contextPrefix, _o.accessPoint, _o.chainingRequired);
    }

    /**
     * @summary Getter that returns the default value for `chainingRequired`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_chainingRequired () { return false; }
}

/**
 * @summary The Leading Root Component Types of CrossReference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CrossReference: $.ComponentSpec[] = [
    new $.ComponentSpec("contextPrefix", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("accessPoint", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("chainingRequired", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CrossReference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CrossReference: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CrossReference
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CrossReference: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CrossReference: $.ASN1Decoder<CrossReference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CrossReference
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CrossReference (el: _Element): CrossReference {
    if (!_cached_decoder_for_CrossReference) { _cached_decoder_for_CrossReference = function (el: _Element): CrossReference {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let contextPrefix!: DistinguishedName;
    let accessPoint!: AccessPointInformation;
    let chainingRequired: OPTIONAL<BOOLEAN> = CrossReference._default_value_for_chainingRequired;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "contextPrefix": (_el: _Element): void => { contextPrefix = $._decode_explicit<DistinguishedName>(() => _decode_DistinguishedName)(_el); },
        "accessPoint": (_el: _Element): void => { accessPoint = $._decode_explicit<AccessPointInformation>(() => _decode_AccessPointInformation)(_el); },
        "chainingRequired": (_el: _Element): void => { chainingRequired = $._decode_explicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_CrossReference,
        _extension_additions_list_spec_for_CrossReference,
        _root_component_type_list_2_spec_for_CrossReference,
        undefined,
    );
    return new CrossReference( /* SET_CONSTRUCTOR_CALL */
        contextPrefix,
        accessPoint,
        chainingRequired
    );
}; }
    return _cached_decoder_for_CrossReference(el);
}

let _cached_encoder_for_CrossReference: $.ASN1Encoder<CrossReference> | null = null;

/**
 * @summary Encodes a(n) CrossReference into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CrossReference, encoded as an ASN.1 Element.
 */
export
function _encode_CrossReference (value: CrossReference, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CrossReference) { _cached_encoder_for_CrossReference = function (value: CrossReference, elGetter: $.ASN1Encoder<CrossReference>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_DistinguishedName, $.BER)(value.contextPrefix, $.BER));
    _components.push(/* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_AccessPointInformation, $.BER)(value.accessPoint, $.BER));
    if (value.chainingRequired !== undefined && !$.deepEq(value.chainingRequired, CrossReference._default_value_for_chainingRequired)) {
        _components.push(/* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.chainingRequired, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_CrossReference(value, elGetter);
}


/* eslint-enable */
