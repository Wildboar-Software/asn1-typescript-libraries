/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    NULL,
    type OBJECT_IDENTIFIER,
    type OPTIONAL,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Psmo_configureImmediateEnable
 * @description
 * 
 * Activate or deactivate immediate Profile enabling, and store default SM-DP+
 * data used for that enabling. Default SM-DP+ data may be updated whether or
 * not immediate enabling changes in the same command. A stored
 * defaultSmdpAddress is also the default SM-DP+ address returned by
 * GetEuiccConfiguredAddresses. SGP.32 v1.2, sections 2.11.1.1, 3.4.4, and
 * 5.13.6.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Psmo-configureImmediateEnable ::= SEQUENCE {
 *     immediateEnableFlag [0] NULL OPTIONAL,
 *     defaultSmdpOid [1] OBJECT IDENTIFIER OPTIONAL,
 *     defaultSmdpAddress [2] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Psmo_configureImmediateEnable {
    /**
     * @summary `immediateEnableFlag`.
     * @description
     * Present to activate immediate Profile enabling when it is inactive. Absent
     * to deactivate it when it is active. Any other combination leaves the current
     * activation state unchanged. SGP.32 v1.2, sections 2.11.1.1 and 3.4.4.
     * @public
     * @readonly
     */
    public readonly immediateEnableFlag?: OPTIONAL<NULL>;
    /**
     * @summary `defaultSmdpOid`.
     * @description
     * Default SM-DP+ object identifier stored for immediate Profile enabling when
     * this field is present. It may be sent with or without immediateEnableFlag.
     * SGP.32 v1.2, sections 2.11.1.1 and 3.4.4.
     * @public
     * @readonly
     */
    public readonly defaultSmdpOid?: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `defaultSmdpAddress`.
     * @description
     * Default SM-DP+ address stored for immediate Profile enabling when this field
     * is present. It may be sent with or without immediateEnableFlag. Once stored,
     * GetEuiccConfiguredAddresses returns it as the default SM-DP+ address. SGP.32
     * v1.2, sections 2.11.1.1 and 3.4.4.
     * @public
     * @readonly
     */
    public readonly defaultSmdpAddress?: OPTIONAL<UTF8String>;

    constructor (
        immediateEnableFlag?: OPTIONAL<NULL>,
        defaultSmdpOid?: OPTIONAL<OBJECT_IDENTIFIER>,
        defaultSmdpAddress?: OPTIONAL<UTF8String>
    ) {
        this.immediateEnableFlag = immediateEnableFlag;
        this.defaultSmdpOid = defaultSmdpOid;
        this.defaultSmdpAddress = defaultSmdpAddress;
    }

    /**
     * @summary Restructures an object into a Psmo_configureImmediateEnable
     * @description
     * 
     * This takes an `object` and converts it to a `Psmo_configureImmediateEnable`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Psmo_configureImmediateEnable`.
     * @returns {Psmo_configureImmediateEnable}
     */
    public static _from_object (_o: { [_K in keyof (Psmo_configureImmediateEnable)]: (Psmo_configureImmediateEnable)[_K] }): Psmo_configureImmediateEnable {
        return new Psmo_configureImmediateEnable(_o.immediateEnableFlag, _o.defaultSmdpOid, _o.defaultSmdpAddress);
    }


}

/**
 * @summary The Leading Root Component Types of Psmo_configureImmediateEnable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Psmo_configureImmediateEnable: $.ComponentSpec[] = [
    new $.ComponentSpec("immediateEnableFlag", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("defaultSmdpOid", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("defaultSmdpAddress", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Psmo_configureImmediateEnable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Psmo_configureImmediateEnable: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Psmo_configureImmediateEnable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Psmo_configureImmediateEnable: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Psmo_configureImmediateEnable: $.ASN1Decoder<Psmo_configureImmediateEnable> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Psmo_configureImmediateEnable
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Psmo_configureImmediateEnable (el: _Element): Psmo_configureImmediateEnable {
    if (!_cached_decoder_for_Psmo_configureImmediateEnable) { _cached_decoder_for_Psmo_configureImmediateEnable = function (el: _Element): Psmo_configureImmediateEnable {
    let immediateEnableFlag: OPTIONAL<NULL>;
    let defaultSmdpOid: OPTIONAL<OBJECT_IDENTIFIER>;
    let defaultSmdpAddress: OPTIONAL<UTF8String>;
    const callbacks: $.DecodingMap = {
        "immediateEnableFlag": (_el: _Element): void => { immediateEnableFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "defaultSmdpOid": (_el: _Element): void => { defaultSmdpOid = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "defaultSmdpAddress": (_el: _Element): void => { defaultSmdpAddress = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Psmo_configureImmediateEnable,
        _extension_additions_list_spec_for_Psmo_configureImmediateEnable,
        _root_component_type_list_2_spec_for_Psmo_configureImmediateEnable,
        undefined,
    );
    return new Psmo_configureImmediateEnable(
        immediateEnableFlag,
        defaultSmdpOid,
        defaultSmdpAddress
    );
}; }
    return _cached_decoder_for_Psmo_configureImmediateEnable(el);
}

let _cached_encoder_for_Psmo_configureImmediateEnable: $.ASN1Encoder<Psmo_configureImmediateEnable> | null = null;

/**
 * @summary Encodes a(n) Psmo_configureImmediateEnable into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Psmo_configureImmediateEnable, encoded as an ASN.1 Element.
 */
export
function _encode_Psmo_configureImmediateEnable (value: Psmo_configureImmediateEnable, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Psmo_configureImmediateEnable) { _cached_encoder_for_Psmo_configureImmediateEnable = function (value: Psmo_configureImmediateEnable): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.immediateEnableFlag === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.immediateEnableFlag, $.BER)),
            /* IF_ABSENT  */ ((value.defaultSmdpOid === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.defaultSmdpOid, $.BER)),
            /* IF_ABSENT  */ ((value.defaultSmdpAddress === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER)(value.defaultSmdpAddress, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Psmo_configureImmediateEnable(value, elGetter);
}


/* eslint-enable */
