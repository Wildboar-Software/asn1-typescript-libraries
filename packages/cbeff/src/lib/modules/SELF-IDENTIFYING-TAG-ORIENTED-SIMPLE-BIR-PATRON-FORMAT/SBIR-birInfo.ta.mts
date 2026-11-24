/* eslint-disable */
import {
    type DATE_TIME,
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type BIRIndex, _decode_BIRIndex, _encode_BIRIndex } from "../CBEFF-DATA-ELEMENTS/BIRIndex.ta.mjs";
import { type Creator, _decode_Creator, _encode_Creator } from "../CBEFF-DATA-ELEMENTS/Creator.ta.mjs";
import { type IntegrityOptions, _decode_IntegrityOptions, _encode_IntegrityOptions } from "../CBEFF-DATA-ELEMENTS/IntegrityOptions.ta.mjs";
import { type Payload, _decode_Payload, _encode_Payload } from "../CBEFF-DATA-ELEMENTS/Payload.ta.mjs";
import { ValidityPeriod, _decode_ValidityPeriod, _encode_ValidityPeriod } from "../CBEFF-DATA-ELEMENTS/ValidityPeriod.ta.mjs";


/**
 * @summary SBIR_birInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SBIR-birInfo ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class SBIR_birInfo {
    /**
     * @summary `birIntegrity`.
     * @public
     * @readonly
     */
    readonly birIntegrity: IntegrityOptions;
    /**
     * @summary `birCreationDate`.
     * @public
     * @readonly
     */
    readonly birCreationDate: OPTIONAL<DATE_TIME>;
    /**
     * @summary `birValidityPeriod`.
     * @public
     * @readonly
     */
    readonly birValidityPeriod: OPTIONAL<ValidityPeriod>;
    /**
     * @summary `birCreator`.
     * @public
     * @readonly
     */
    readonly birCreator: OPTIONAL<Creator>;
    /**
     * @summary `birIndex`.
     * @public
     * @readonly
     */
    readonly birIndex: OPTIONAL<BIRIndex>;
    /**
     * @summary `birPayload`.
     * @public
     * @readonly
     */
    readonly birPayload: OPTIONAL<Payload>;
    /**
     * @summary `birPointer`.
     * @public
     * @readonly
     */
    readonly birPointer: OPTIONAL<OCTET_STRING>;

    constructor (
        birIntegrity: IntegrityOptions,
        birCreationDate?: OPTIONAL<DATE_TIME>,
        birValidityPeriod?: OPTIONAL<ValidityPeriod>,
        birCreator?: OPTIONAL<Creator>,
        birIndex?: OPTIONAL<BIRIndex>,
        birPayload?: OPTIONAL<Payload>,
        birPointer?: OPTIONAL<OCTET_STRING>
    ) {
        this.birIntegrity = birIntegrity;
        this.birCreationDate = birCreationDate;
        this.birValidityPeriod = birValidityPeriod;
        this.birCreator = birCreator;
        this.birIndex = birIndex;
        this.birPayload = birPayload;
        this.birPointer = birPointer;
    }

    /**
     * @summary Restructures an object into a SBIR_birInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SBIR_birInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SBIR_birInfo`.
     * @returns {SBIR_birInfo}
     */
    public static _from_object (_o: { [_K in keyof (SBIR_birInfo)]: (SBIR_birInfo)[_K] }): SBIR_birInfo {
        return new SBIR_birInfo(_o.birIntegrity, _o.birCreationDate, _o.birValidityPeriod, _o.birCreator, _o.birIndex, _o.birPayload, _o.birPointer);
    }


}

/**
 * @summary The Leading Root Component Types of SBIR_birInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SBIR_birInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("birIntegrity", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("birCreationDate", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("birValidityPeriod", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("birCreator", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("birIndex", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("birPayload", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("birPointer", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SBIR_birInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SBIR_birInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SBIR_birInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SBIR_birInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SBIR_birInfo: $.ASN1Decoder<SBIR_birInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SBIR_birInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SBIR_birInfo (el: _Element): SBIR_birInfo {
    if (!_cached_decoder_for_SBIR_birInfo) { _cached_decoder_for_SBIR_birInfo = function (el: _Element): SBIR_birInfo {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let birIntegrity!: IntegrityOptions;
    let birCreationDate: OPTIONAL<DATE_TIME>;
    let birValidityPeriod: OPTIONAL<ValidityPeriod>;
    let birCreator: OPTIONAL<Creator>;
    let birIndex: OPTIONAL<BIRIndex>;
    let birPayload: OPTIONAL<Payload>;
    let birPointer: OPTIONAL<OCTET_STRING>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "birIntegrity": (_el: _Element): void => { birIntegrity = $._decode_implicit<IntegrityOptions>(() => _decode_IntegrityOptions)(_el); },
        "birCreationDate": (_el: _Element): void => { birCreationDate = $._decode_implicit<DATE_TIME>(() => $._decodeDateTime)(_el); },
        "birValidityPeriod": (_el: _Element): void => { birValidityPeriod = $._decode_implicit<ValidityPeriod>(() => _decode_ValidityPeriod)(_el); },
        "birCreator": (_el: _Element): void => { birCreator = $._decode_implicit<Creator>(() => _decode_Creator)(_el); },
        "birIndex": (_el: _Element): void => { birIndex = $._decode_implicit<BIRIndex>(() => _decode_BIRIndex)(_el); },
        "birPayload": (_el: _Element): void => { birPayload = $._decode_implicit<Payload>(() => _decode_Payload)(_el); },
        "birPointer": (_el: _Element): void => { birPointer = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_SBIR_birInfo,
        _extension_additions_list_spec_for_SBIR_birInfo,
        _root_component_type_list_2_spec_for_SBIR_birInfo,
        undefined,
    );
    return new SBIR_birInfo( /* SET_CONSTRUCTOR_CALL */
        birIntegrity,
        birCreationDate,
        birValidityPeriod,
        birCreator,
        birIndex,
        birPayload,
        birPointer
    );
}; }
    return _cached_decoder_for_SBIR_birInfo(el);
}

let _cached_encoder_for_SBIR_birInfo: $.ASN1Encoder<SBIR_birInfo> | null = null;

/**
 * @summary Encodes a(n) SBIR_birInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SBIR_birInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SBIR_birInfo (value: SBIR_birInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SBIR_birInfo) { _cached_encoder_for_SBIR_birInfo = function (value: SBIR_birInfo, elGetter: $.ASN1Encoder<SBIR_birInfo>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_IntegrityOptions, $.BER)(value.birIntegrity, $.BER));
    if (value.birCreationDate !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 24, () => $._encodeDateTime, $.BER)(value.birCreationDate, $.BER));
    }
    if (value.birValidityPeriod !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 27, () => _encode_ValidityPeriod, $.BER)(value.birValidityPeriod, $.BER));
    }
    if (value.birCreator !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Creator, $.BER)(value.birCreator, $.BER));
    }
    if (value.birIndex !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 16, () => _encode_BIRIndex, $.BER)(value.birIndex, $.BER));
    }
    if (value.birPayload !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_Payload, $.BER)(value.birPayload, $.BER));
    }
    if (value.birPointer !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.birPointer, $.BER));
    }
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_SBIR_birInfo(value, elGetter);
}


/* eslint-enable */
