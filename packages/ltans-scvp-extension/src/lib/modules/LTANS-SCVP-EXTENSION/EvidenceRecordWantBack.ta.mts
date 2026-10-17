/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EvidenceRecord, _decode_EvidenceRecord, _encode_EvidenceRecord } from "../ERS/EvidenceRecord.ta.mjs";


/**
 * @summary EvidenceRecordWantBack
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EvidenceRecordWantBack ::= SEQUENCE {
 *     targetWantBack    OBJECT IDENTIFIER,
 *     evidenceRecord    EvidenceRecord OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EvidenceRecordWantBack {
    /**
     * @summary `targetWantBack`.
     * @public
     * @readonly
     */
    readonly targetWantBack: OBJECT_IDENTIFIER;
    /**
     * @summary `evidenceRecord`.
     * @public
     * @readonly
     */
    readonly evidenceRecord: OPTIONAL<EvidenceRecord>;

    constructor (
        targetWantBack: OBJECT_IDENTIFIER,
        evidenceRecord: OPTIONAL<EvidenceRecord>
    ) {
        this.targetWantBack = targetWantBack;
        this.evidenceRecord = evidenceRecord;
    }

    /**
     * @summary Restructures an object into a EvidenceRecordWantBack
     * @description
     * 
     * This takes an `object` and converts it to a `EvidenceRecordWantBack`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EvidenceRecordWantBack`.
     * @returns {EvidenceRecordWantBack}
     */
    public static _from_object (_o: { [_K in keyof (EvidenceRecordWantBack)]: (EvidenceRecordWantBack)[_K] }): EvidenceRecordWantBack {
        return new EvidenceRecordWantBack(_o.targetWantBack, _o.evidenceRecord);
    }


}

/**
 * @summary The Leading Root Component Types of EvidenceRecordWantBack
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EvidenceRecordWantBack: $.ComponentSpec[] = [
    new $.ComponentSpec("targetWantBack", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("evidenceRecord", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of EvidenceRecordWantBack
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EvidenceRecordWantBack: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EvidenceRecordWantBack
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EvidenceRecordWantBack: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EvidenceRecordWantBack: $.ASN1Decoder<EvidenceRecordWantBack> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EvidenceRecordWantBack
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EvidenceRecordWantBack (el: _Element): EvidenceRecordWantBack {
    if (!_cached_decoder_for_EvidenceRecordWantBack) { _cached_decoder_for_EvidenceRecordWantBack = function (el: _Element): EvidenceRecordWantBack {
    let targetWantBack!: OBJECT_IDENTIFIER;
    let evidenceRecord: OPTIONAL<EvidenceRecord>;
    const callbacks: $.DecodingMap = {
        "targetWantBack": (_el: _Element): void => { targetWantBack = $._decodeObjectIdentifier(_el); },
        "evidenceRecord": (_el: _Element): void => { evidenceRecord = _decode_EvidenceRecord(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EvidenceRecordWantBack,
        _extension_additions_list_spec_for_EvidenceRecordWantBack,
        _root_component_type_list_2_spec_for_EvidenceRecordWantBack,
        undefined,
    );
    return new EvidenceRecordWantBack(
        targetWantBack,
        evidenceRecord
    );
}; }
    return _cached_decoder_for_EvidenceRecordWantBack(el);
}

let _cached_encoder_for_EvidenceRecordWantBack: $.ASN1Encoder<EvidenceRecordWantBack> | null = null;

/**
 * @summary Encodes a(n) EvidenceRecordWantBack into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EvidenceRecordWantBack, encoded as an ASN.1 Element.
 */
export
function _encode_EvidenceRecordWantBack (value: EvidenceRecordWantBack, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EvidenceRecordWantBack) { _cached_encoder_for_EvidenceRecordWantBack = function (value: EvidenceRecordWantBack, elGetter: $.ASN1Encoder<EvidenceRecordWantBack>): _Element {
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encodeObjectIdentifier(value.targetWantBack, $.BER);
    if (value.evidenceRecord !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ _encode_EvidenceRecord(value.evidenceRecord, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EvidenceRecordWantBack(value, elGetter);
}


/* eslint-enable */
