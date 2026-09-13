/* eslint-disable */
import {
    OPTIONAL,
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
import { AE_Identifier, _decode_AE_Identifier, _encode_AE_Identifier } from "../DOR-definition/AE-Identifier.ta.mjs";
// export { AE_Identifier, _decode_AE_Identifier, _encode_AE_Identifier } from "../DOR-definition/AE-Identifier.ta.mjs";
import { Local_reference, _decode_Local_reference, _encode_Local_reference } from "../DOR-definition/Local-reference.ta.mjs";
// export { Local_reference, _decode_Local_reference, _encode_Local_reference } from "../DOR-definition/Local-reference.ta.mjs";
import { Quality_of_Service, _decode_Quality_of_Service, _encode_Quality_of_Service } from "../DOR-definition/Quality-of-Service.ta.mjs";
// export { Quality_of_Service, _decode_Quality_of_Service, _encode_Quality_of_Service } from "../DOR-definition/Quality-of-Service.ta.mjs";
import { Token, _decode_Token, _encode_Token } from "../DOR-definition/Token.ta.mjs";
// export { Token, _decode_Token, _encode_Token } from "../DOR-definition/Token.ta.mjs";


/**
 * @summary DOR
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DOR ::= SEQUENCE {
 *   ae-identifier       [0]  AE-Identifier OPTIONAL,
 *   --  mandatory in case of produce-operations and consume-operations
 *   local-reference     [1]  Local-reference,
 *   data-object-type    OBJECT IDENTIFIER,
 *   -- identifying the abstract syntax and  the transfer syntax of the
 *   -- referenced data value
 *   quality-of-service  [2]  Quality-of-Service DEFAULT {},
 *   token               [3]  Token OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DOR {
    constructor (
        /**
         * @summary `ae_identifier`.
         * @public
         * @readonly
         */
        readonly ae_identifier: OPTIONAL<AE_Identifier>,
        /**
         * @summary `local_reference`.
         * @public
         * @readonly
         */
        readonly local_reference: Local_reference,
        /**
         * @summary `data_object_type`.
         * @public
         * @readonly
         */
        readonly data_object_type: OBJECT_IDENTIFIER,
        /**
         * @summary `quality_of_service`.
         * @public
         * @readonly
         */
        readonly quality_of_service: OPTIONAL<Quality_of_Service>,
        /**
         * @summary `token`.
         * @public
         * @readonly
         */
        readonly token: OPTIONAL<Token>
    ) {}

    /**
     * @summary Restructures an object into a DOR
     * @description
     * 
     * This takes an `object` and converts it to a `DOR`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DOR`.
     * @returns {DOR}
     */
    public static _from_object (_o: { [_K in keyof (DOR)]: (DOR)[_K] }): DOR {
        return new DOR(_o.ae_identifier, _o.local_reference, _o.data_object_type, _o.quality_of_service, _o.token);
    }

    /**
     * @summary Getter that returns the default value for `quality_of_service`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_quality_of_service () { return Quality_of_Service._from_object({  }); }
}

/**
 * @summary The Leading Root Component Types of DOR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DOR: $.ComponentSpec[] = [
    new $.ComponentSpec("ae-identifier", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("local-reference", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("data-object-type", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("quality-of-service", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("token", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of DOR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DOR: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DOR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DOR: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DOR: $.ASN1Decoder<DOR> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DOR
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DOR (el: _Element): DOR {
    if (!_cached_decoder_for_DOR) { _cached_decoder_for_DOR = function (el: _Element): DOR {
    let ae_identifier: OPTIONAL<AE_Identifier>;
    let local_reference!: Local_reference;
    let data_object_type!: OBJECT_IDENTIFIER;
    let quality_of_service: OPTIONAL<Quality_of_Service> = DOR._default_value_for_quality_of_service;
    let token: OPTIONAL<Token>;
    const callbacks: $.DecodingMap = {
        "ae-identifier": (_el: _Element): void => { ae_identifier = $._decode_explicit<AE_Identifier>(() => _decode_AE_Identifier)(_el); },
        "local-reference": (_el: _Element): void => { local_reference = $._decode_explicit<Local_reference>(() => _decode_Local_reference)(_el); },
        "data-object-type": (_el: _Element): void => { data_object_type = $._decodeObjectIdentifier(_el); },
        "quality-of-service": (_el: _Element): void => { quality_of_service = $._decode_explicit<Quality_of_Service>(() => _decode_Quality_of_Service)(_el); },
        "token": (_el: _Element): void => { token = $._decode_explicit<Token>(() => _decode_Token)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DOR,
        _extension_additions_list_spec_for_DOR,
        _root_component_type_list_2_spec_for_DOR,
        undefined,
    );
    return new DOR(
        ae_identifier,
        local_reference,
        data_object_type,
        quality_of_service,
        token
    );
}; }
    return _cached_decoder_for_DOR(el);
}

let _cached_encoder_for_DOR: $.ASN1Encoder<DOR> | null = null;

/**
 * @summary Encodes a(n) DOR into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DOR, encoded as an ASN.1 Element.
 */
export
function _encode_DOR (value: DOR, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DOR) { _cached_encoder_for_DOR = function (value: DOR): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.ae_identifier === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_AE_Identifier, $.BER)(value.ae_identifier, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_Local_reference, $.BER)(value.local_reference, $.BER),
            /* REQUIRED   */ $._encodeObjectIdentifier(value.data_object_type, $.BER),
            /* IF_DEFAULT */ (value.quality_of_service === undefined || $.deepEq(value.quality_of_service, DOR._default_value_for_quality_of_service) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_Quality_of_Service, $.BER)(value.quality_of_service, $.BER)),
            /* IF_ABSENT  */ ((value.token === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_Token, $.BER)(value.token, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DOR(value, elGetter);
}


/* eslint-enable */
